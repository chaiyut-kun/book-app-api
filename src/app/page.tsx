"use client";

import React, { useState } from "react";
import { Link, Box, Typography, Container, Button } from "@mui/material";
import axios from "axios";
import { BookResponse, Book } from "@/types/book";

export default function Home() {
  const [booksData, setBooksData] = useState<Book[]>([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/api/books");
    if (response.statusText == "OK") {
      const data = response.data;
      const resData: BookResponse = data;
      const books = resData.books;
      return books
    }
  };

  const handleBooksData = async () => {
    const data: Book[] = (await getData()) ?? [];
    setBooksData(data)
  }

  return (
    <Container>
      <Box className="mt-8 flex gap-2 items-center justify-center">
        <Link href={"https://github.com/tanapattara-classroom/classroom-api"}>
          To classroom-api repository
        </Link>
        <Button onClick={handleBooksData}>Click to get books</Button>
      </Box>

      <Typography variant="h1">Hello world</Typography>
      {booksData &&
        booksData.map((book, key) => {
          return <Typography key={key}>{book.title}</Typography>;
        })}
    </Container>
  );
}
