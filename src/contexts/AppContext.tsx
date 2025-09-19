import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AuthService from '@/lib/AuthService';
import axios from 'axios';
import { User } from '@/types/book';

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (credentials: any) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
    updateUser: (userData: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    // ตรวจสอบ authentication เมื่อแอปเริ่มทำงาน
    useEffect(() => {
      checkAuth();
    }, []);
  
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // เรียก API เพื่อดึงข้อมูล user
          const response = await axios.get('http://localhost:3000/api/auth/profile', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          if (response.status === 200) {
            const userData = await response.data;
            setUser(userData.user);
          } else {
            // Token หมดอายุหรือไม่ถูกต้อง
            localStorage.removeItem('token');
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('token');
      } finally {
        setIsLoading(false);
      }
    };
  
    const login = async (credentials: any) => {
      try {
        const response = await AuthService.Login(credentials);
        
        if (response.status === 200) {
          const { token, user: userData } = response.data;
          localStorage.setItem('token', token);
          setUser(userData.user);
          
          return { success: true };
        }
        
        return { success: false, error: 'Invalid credentials' };
      } catch (error: any) {
        console.error('Login failed:', error);
        return { 
          success: false, 
          error: error.response?.data?.message || 'Login failed' 
        };
      }
    };
  
    const logout = () => {
      localStorage.removeItem('token');
      setUser(null);
    };
  
    const updateUser = (userData: User) => {
      setUser(userData);
    };
  
    const value = {
      user,
      isLoading,
      login,
      logout,
      updateUser,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context
  }
