interface BookCardProps {
    setBook: Book;
    id: string; 
    title: string;
    author: string;
    description?: string;
    price?: number;
    year?: number;
    available?: boolean;
    genre?: string;
    publisher?: string;
    publisherEmail?: string;
    
}