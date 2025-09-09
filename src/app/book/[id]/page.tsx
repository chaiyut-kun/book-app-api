"use client"

import { Book, BookResponse } from "@/types/book";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Page() {
    const { id } = useParams()
    const [book, setBook] = useState<Book>()

    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios.get(`http://localhost:3000/api/books/${id}`);
            if (response.statusText === "OK") {
                const data: Book = await response.data.book
                console.log(data);
                
                setBook(data)
            }
        };
        fetchBook();
    }, [])

    return (
        <div>
            <h1>Book ID: {id}</h1>
            <h2>Book Author: {book?.author}</h2>
        </div>
    )
    
}