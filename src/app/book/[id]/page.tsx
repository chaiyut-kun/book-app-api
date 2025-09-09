"use client"

import { Book, BookResponse } from "@/types/book";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';


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

            <BasicCard author={book?.author} title={book?.title} description={book?.description} price={book?.price}></BasicCard>
            
        </div>
    )
    
}



export function BasicCard({ author, title, description, price, year, available }: BookCardProps) {
  return (
    <>
    <Card sx={{ width: 500, minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {author}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
        <Typography variant="body2">
          {description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
            {price} ฿
        </Button>
      </CardActions>
    </Card>

    <Card variant="outlined" sx={{ width: 500, minWidth: 275 }} className="mt-4">
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                ตีพิมพ์ในปี : {year}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                สถานะ : {available}
            </Typography>
              
        </CardContent>
    </Card>
    </>
  );
}