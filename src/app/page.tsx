"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { BookResponse, Book } from "@/types/book";
import { getBooks } from "@/module/GetBook";
import BookList from "./component/BookList";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";

import { ProfileChip, AvatarProfile, GithubDescription } from "./component/ProfileComp";

export default function Home() {
  const [booksData, setBooksData] = useState<Book[]>([]);

  useEffect(() => {
    const handleBooksData = async () => {
      const data: Book[] = (await getBooks()) ?? [];
      setBooksData(data);
    };
    handleBooksData();
  }, []);

  return (
    <Container>
      <ImageList sx={{ width: "fit-content", height: "fit-content" }} cols={4}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader
            component="div"
            className="rounded flex items-center gap-1"
          >
            There is
            <Typography sx={{ fontWeight: "bold" }} className="text-lg">
              {booksData.length}
            </Typography>
            in our store
          </ListSubheader>

          {/* github profile */}
          <Card sx={{ bgcolor: "#27272a", color: "white" }}>
            <Container sx={{ mb: 3.5 }}>
              <AvatarProfile />
              <GithubDescription />
              <ProfileChip />
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
