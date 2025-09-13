"use client";

import React, { useState } from "react";
import { Box, Typography, Container, Button, Avatar, Card  } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { BookResponse, Book } from "@/types/book";
import { getBooks } from "@/module/GetBook";
import BookList from "./BookList";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Home() {
  const [booksData, setBooksData] = useState<Book[]>([]);

  const handleBooksData = async () => {
    const data: Book[] = (await getBooks()) ?? [];
    setBooksData(data);
  };

  return (
    <Container>
      <Box className="mt-8 flex gap-2 items-center justify-center">
        <Link
          href={"https://github.com/tanapattara-classroom/classroom-api"}
          target="_blank"
          className="text-gray-50 text-xl underline"
        >
          To classroom-api repository
        </Link>
        <Button onClick={handleBooksData}>Click to get books</Button>
      </Box>

      {/* {isLoading && <Typography>Loading...</Typography>} */}

      <ImageList sx={{ width: "fit-content", height: "fit-content" }} cols={4}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">All of books</ListSubheader>
          <Box className="mt-8 flex gap-2 items-center justify-center">
            <Link
              href={"https://github.com/tanapattara-classroom/classroom-api"}
              target="_blank"
              className="text-gray-50 text-xl underline"
            >
              To classroom-api repository
            </Link>
          </Box>
          <Button onClick={handleBooksData}>Click to get books</Button>

          <Card
                    sx={{ bgcolor: "#27272a", color: "white" }}
                  >
                    {/* github link https://github.com/chaiyut-kun*/}
                    <Container>
                      <Avatar
                        alt="Chaiyut github"
                        src="https://avatars.githubusercontent.com/u/135094423?v=4"
                        sx={{ width: 200, height: 200, mx: "auto", mt: 4 }}
                      ></Avatar>
          
                      <Box className="text-center mt-1">
                      <Button component="a" href="https://github.com/chaiyut-kun">
                        <Typography
                          variant="h6"
                          className="mt-2 text-gray-200"
                          >
                          <GitHubIcon fontSize="medium" className="me-1 mb-1"/>
                          Chaiyut-Kun
                        </Typography>
                      </Button>
                      </Box>
                      <Typography
                          className="text-center mt-2 text-gray-400"
                          sx={{ fontSize: 12 }}
                      >
                        Junior Developer at 
                        Khonkaen university
                      </Typography>
          
                    </Container>
                  </Card>
          
        </ImageListItem>
        {/* List Item */}
        {booksData &&
          booksData.map((book) => {
            return (
              <BookList
                key={book._id}
                id={book._id}
                title={book.title}
                author={book.author}
              ></BookList>
            );
          })}
      </ImageList>
    </Container>
  );
}
