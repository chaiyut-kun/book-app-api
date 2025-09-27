interface User {
  _id: string;
  username: string;
  email: string;
}

interface Book {
    _id: string;
    title: string;
    author: string;
    description: string
    genre: string
    year: number
    price: number
    available: boolean;
    addedBy: User;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
}

interface BookCreate {
    title: string;
    author: string;
    description: string
    genre: string
    year: number
    price: number
    available: boolean;
}

interface BookUpdate {
    title?: string;
    author?: string;
    description?: string
    year?: number
    price?: number
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

// Root response model
interface BookResponse {
  books: Book[];
  pagination: Pagination;
}


export type { User, Book, Pagination, BookResponse, BookCreate, BookUpdate };