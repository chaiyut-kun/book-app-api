"use client";

import { Button, Box, Container, Grid, Stack } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Link from "next/link";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { faBook, fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { getBooks } from "@/module/GetBook";
import { Book } from "@/types/book";

library.add(fas, far, fab);

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [booksTitle, setBooksTitle] = React.useState<Book[]>([]);

  useEffect(() => {

    getBooks().then((data) => setBooksTitle(data as Book[]));
  
  }, []);
  
  return (
    <Container className="mt-6 flex-col items-center gap-4" sx={{  }}>
      <Box className="border-[0.5px] border-slate-800 rounded p-2 w-auto">
        <Button variant="outlined" component="a" href="/" className="flex items-center gap-2 h-12">
            <FontAwesomeIcon icon={faHouse} className="w-5 h-5"/>
            <div className="text-lg mt-1">Home</div> 
        </Button>
      </Box>

      <Grid spacing={6} className="mb-4 overflow-wrap">
        {booksTitle && booksTitle.map((book) => {
          return (
            <Box className="border-[0.5px] border-slate-800 rounded w-auto" key={book._id}>
              <Button variant="outlined" component="a" href={`/books/${book._id}`} className="h-12 w-[14rem]">
                <FontAwesomeIcon icon={faBook} className="w-5 h-5"/>
                <div className="text-xs mt-1">{book.title}</div> 
              </Button>
            </Box>
          )
        })}
      </Grid>
      
      <Box className="mt-8">{children}</Box>
    </Container>
  );
}



export default layout;

