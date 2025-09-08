"use client"

import React from "react";
import { Link, Box, Typography, Container, Button } from "@mui/material";
import axios from "axios";


export default function Home() {
  const getData = async () => {
    const response = await axios.get("http://localhost:3000/api/books");
    if(response.statusText == "OK") {
      const data = response.data
      console.log(typeof data.books);
      console.log(typeof await data.books[0].json());
    }
  };

  return (
    <Container>
      <Box className="mt-8 flex gap-2 items-center justify-center">
        <Link href={"https://github.com/tanapattara-classroom/classroom-api"}>
          To classroom-api repository
        </Link>
      <Button onClick={getData}>
        Click to get books
      </Button>
      </Box>
    </Container>
  );
}
