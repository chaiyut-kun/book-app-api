"use client";

import { Book, BookResponse } from "@/types/book";
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
  Chip,
  Grid,
  Container,
  Avatar,
} from "@mui/material";
import { getBook } from "@/module/GetBook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { ImgLink } from "@/module/ImgLink";
import { AvatarProfile, GithubDescription } from "@/app/component/ProfileComp";

export default function Page() {
  const { id } = useParams();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    getBook(id as string).then((book) => setBook(book as Book));
  }, []);

  return (
    <div>
      {book && (
        <BasicCard
          id={book._id}
          author={book.author}
          title={book.title}
          description={book.description}
          price={book.price}
          year={book.year}
          available={book.available}
          genre={book.genre}
          publisher={book.addedBy.username}
          publisherEmail={book.addedBy.email}
        />
      )}
    </div>
  );
}

export function BasicCard({
  id,
  author,
  title,
  description,
  price,
  year,
  available,
  genre,
  publisher,
  publisherEmail,
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
              // height: 200,
            }}
          >
            <CardMedia
              component="img"
              sx={{ objectFit: "cover", height: 300, objectPosition: "top" }}
              image={title && ImgLink[title as keyof typeof ImgLink]}
              alt="Book Cover"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom sx={{ color: "#a1a1aa", fontSize: 14 }}>
                <FontAwesomeIcon icon={faUser} className="text-xl me-1 ms-1" />
                {author}
              </Typography>
              <Typography variant="h5" component="div">
                <FontAwesomeIcon icon={faBook} className="w-5 h-5" />
                {title}
              </Typography>
              <Typography
                sx={{ fontSize: 14, mb: 1, ml: 1 }}
                className="text-stone-500"
              >
                published : {year}
              </Typography>
              <Typography variant="body2" className="mt-2 text-gray-500">
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ fontSize: 24 }}>
                {price} ฿
              </Button>

              <Stack direction="row" gap={1}>
                <Chip
                  label={available ? "In Stock" : "Out of Stock"}
                  color={available ? "success" : "error"}
                  sx={{ mt: 0.5 }}
                  component="div"
                />
                <Chip sx={{ mt: 0.5 }} label={genre} component="div"></Chip>
              </Stack>
            </CardActions>
          </Card>
        </Box>
        <Card
          sx={{
            maxWidth: 345,
            maxHeight: 530,
            width: 500,
            bgcolor: "#27272a",
            color: "white",
          }}
        >
          <CardMedia
            component="img"
            sx={{ objectFit: "cover", height: 445, objectPosition: "top" }}
            image={title && ImgLink[title as keyof typeof ImgLink]}
            alt="Book Cover"
          ></CardMedia>
          <Button variant="text" fullWidth sx={{ height: 45, color: "white" }}>
            {title}
          </Button>
          <Button variant="outlined" fullWidth>
            ID: {id}
          </Button>
        </Card>

        <Card
          sx={{ maxWidth: 345, width: 500, bgcolor: "#27272a", color: "white" }}
        >
          {/* github link https://github.com/chaiyut-kun*/}
          <Container>
            <AvatarProfile />

            <GithubDescription />
            <Typography
                className="text-center mt-2 text-gray-400"
                sx={{ fontSize: 12 }}
            >
              Junior Developer at 
              Khonkaen university
            </Typography>

            <Box className="text-center mt-2">
              <Chip
                label={publisher}
                variant="outlined"
                className="me-1 mt-4"
                sx={{ color: "white" }}
              />
              <Chip
                label={publisherEmail}
                variant="outlined"
                className="ms-1 mt-4"
                sx={{ color: "white" }}
              />
            </Box>
          </Container>
        </Card>
      </Stack>
    </>
  );
}


