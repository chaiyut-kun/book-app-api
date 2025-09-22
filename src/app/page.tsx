"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
} from "@mui/material";
import { Book } from "@/types/book";
import { getBooks } from "@/module/GetBook";
import BookList from "./component/BookList";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";

import { ProfileChip, AvatarProfile, GithubDescription } from "./component/ProfileComp";
import AuthService from "@/lib/AuthService";
import { useAuth } from "@/contexts/AppContext";
import { AddBookModal } from "./component/ActionModal";

export default function Home() {

  // if isLoggedIn

  const { user } = useAuth();

  const [booksData, setBooksData] = useState<Book[]>([]);

  const handleBooksData = async () => {
    const data: Book[] = (await getBooks()) ?? [];
    setBooksData(data);
  };

  useEffect(() => {
    AuthService.CheckToken();
    handleBooksData();


  }, []);


  return (
    <>
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
              {user && <AddBookModal onAddSuccess={() => handleBooksData?.()} />}    
            </ListSubheader>

            {/* github profile */}
            <Card sx={{ bgcolor: "#27272a", color: "white", }}>
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
                  onDeleteSuccess={handleBooksData}
                ></BookList>
              );
            })}
        </ImageList>
      </Container>
    </>
  );
}
