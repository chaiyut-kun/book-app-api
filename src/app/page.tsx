"use client";

import React, { useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { BookResponse, Book } from "@/types/book";
import { getBooks } from "@/module/GetBook";

export default function Home() {
  const [booksData, setBooksData] = useState<Book[]>([]);
  
  const handleBooksData = async () => {
    const data: Book[] = (await getBooks()) ?? [];
    setBooksData(data)
  }

  return (
    <Container>
      <Box className="mt-8 flex gap-2 items-center justify-center">
        <Link href={"https://github.com/tanapattara-classroom/classroom-api"} target="_blank" className="text-gray-50 text-xl underline">
          To classroom-api repository
        </Link>
        <Button onClick={handleBooksData}>Click to get books</Button>
      </Box>

      <Typography variant="h1">Hello world</Typography>
      {/* {isLoading && <Typography>Loading...</Typography>} */}
      {booksData &&
        booksData.map((book) => {
          return (
            <Box key={book._id}>
              <Link href={`book/${book._id}`} key={book._id}>{book.title}</Link>
            </Box>
          )
        })}
    </Container>
  );
}
