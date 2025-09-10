"use client";

import { Book, BookResponse } from "@/types/book";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Stack,
  Box,
  CardMedia,
} from "@mui/material";
import { getBook } from "@/module/GetBook";

export default function Page() {
  const { id } = useParams();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    getBook(id as string).then((book) => setBook(book as Book));
  }, []);

  return (
    <div>
      <h1>Book ID: {id}</h1>

      {book && (
        <BasicCard
          author={book.author}
          title={book.title}
          description={book.description}
          price={book.price}
          year={book.year}
          available={book.available}
        />
      )}
    </div>
  );
}

export function BasicCard({
  author,
  title,
  description,
  price,
  year,
  available,
}: BookCardProps) {
  return (
    <>
      <Stack direction="row" spacing={2} className="mb-4">
        <Box>
          <Card
            sx={{
              color: "white",
              bgcolor: "#27272a",
              width: 500,
              minWidth: 275,
            }}
          >
            <CardContent>
              <Typography gutterBottom sx={{ color: "#a1a1aa", fontSize: 14 }}>
                {author}
              </Typography>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography sx={{ color: "#a1a1aa", mb: 1.5 }}>
                adjective
              </Typography>
              <Typography variant="body2">
                {description}
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">{price} ฿</Button>
            </CardActions>
          </Card>

          <Card
            variant="outlined"
            sx={{ width: 500, minWidth: 275 }}
            className="mt-4"
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                published : {year}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                available : {available ? "yes" : "no"}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardMedia
              component="img"
              sx={{ width: "400px", height: "440px", objectFit: "fill" }}
              image={title && ImgLink[title as keyof typeof ImgLink]}
              alt="Sherlock Holmes"
            ></CardMedia>
          </Card>
        </Box>
      </Stack>
    </>
  );
}

export const ImgLink = {
  "Brave New World":
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1640548550i/58444853.jpg",
  "The Alchemist":
    "https://cdn.kobo.com/book-images/32ad8373-9cc5-4c4f-aa82-8155edbc7029/1200/1200/False/the-alchemist-a-graphic-novel.jpg",
  "Animal Farm":
    "https://geomatters.com/cdn/shop/products/INM425_grande.png?v=1599589821",
  "Lord of the Flies":
    "https://static01.nyt.com/images/2016/10/30/books/review/30LOWRY-CRITICSTAKE/30LOWRY-CRITICSTAKE-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale",
  "The Catcher in the Rye":
    "https://m.media-amazon.com/images/I/7108sdEUEGL.jpg",
  "The Hobbit":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxq_uPLEKbYfbMnoMD3pGeg9G7rpqpgSPgbA&s",
  "Pride and Prejudice":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg8O57u9DkNcCbSL8zcZp2VTTotLPO8bCsAw&s",
  "The Great Gatsby":
    "https://m.media-amazon.com/images/I/81TLiZrasVL._UF1000,1000_QL80_.jpg",
  "1984":
    "https://bci.kinokuniya.com/jsp/images/book-img/97801/97801410/9780141036144.JPG",
  "To Kill a Mockingbird":
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg",
};
