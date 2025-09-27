import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AuthService from '@/lib/AuthService';
import axios from 'axios';
import { User } from '@/types/book';

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
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
        if (token !== null) {
          // เรียก API เพื่อดึงข้อมูล user
          const response = await axios.get(`${AuthService.API_PATH}/auth/profile`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          
          if (response.status === 200) {
            const userData = await response.data;
            setUser(userData.user);
          } else {
            console.log('Token is invalid')
            // Token หมดอายุหรือไม่ถูกต้อง
            localStorage.removeItem('token');
          }
        } else {
          console.log('No token found')
        }

        
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('token');
      } finally {
        setIsLoading(false);
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
