"use client";

import { Book, BookUpdate } from "@/types/book";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
  Container,
  TextField,
  Modal,
} from "@mui/material";
import { getBook, getBooks, } from "@/module/GetBook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { ImgLink } from "@/module/ImgLink";
import { AvatarProfile, GithubDescription } from "@/app/component/ProfileComp";
import EditIcon from '@mui/icons-material/Edit';
import { BookService } from "@/lib/BookService";

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
          setBook={setBook}
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
  setBook,
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

  const [editBtn, setEditBtn] = useState(false)
  const [Author, setAuthor] = useState(author)
  const [Title, setTitle] = useState(title)
  const [Description, setDescription] = useState(description)
  const [Price, setPrice] = useState(price)
  const [Year, setYear] = useState(year)

  const [editAuthor, setEditAuthor] = useState(false)
  const [editTitle, setEditTitle] = useState(false)
  const [editDescription, setEditDescription] = useState(false)
  const [editPrice, setEditPrice] = useState(false)
  const [editYear, setEditYear] = useState(false)

  const SaveEdit = async () => {
    const updateBook = {
      title: Title,
      author: Author,
      description: Description,
      price: Price,
      year: Year,
    }
    console.log(BookService.UpdateBook(id as string, updateBook).then((res) => console.log(res)))
    // console.log(getBooks())
    // const newbook = await BookService.UpdateBook(id as string, updateBook)
    // setBook(newbook)
  }
  
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
                {Author}
                <Button variant="text" onClick={() => setEditAuthor(true)}>
                  <EditIcon />
                </Button>
                <EditModal item={Author} setItem={setAuthor} state={editAuthor} setState={setEditAuthor}/>
              </Typography>


              <Typography variant="h5" component="div">
                <FontAwesomeIcon icon={faBook} className="w-5 h-5" />
                {Title}
                <Button variant="text" onClick={() => setEditTitle(true)}>
                  <EditIcon />
                </Button>
                <EditModal item={Title} setItem={setTitle} state={editTitle} setState={setEditTitle}/>
              </Typography>
              <Typography
                sx={{ fontSize: 14, mb: 1, ml: 1 }}
                className="text-stone-500"
              >
                published : {Year}
                <Button variant="text" onClick={() => setEditYear(true)}>
                  <EditIcon />
                </Button>
                <EditModal item={Year} setItem={setYear} state={editYear} setState={setEditYear}/>
              </Typography>
              <Typography variant="body2" className="mt-2 text-gray-500">
                {Description}
                <Button variant="text" onClick={() => setEditDescription(true)}>
                  <EditIcon />
                </Button>
                <EditModal item={Description} setItem={setDescription} state={editDescription} setState={setEditDescription}/>
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" sx={{ fontSize: 24 }}>
                {Price} ฿
              </Button>
              <Button variant="text" onClick={() => setEditPrice(true)}>
                <EditIcon />
              </Button>
              <EditModal item={Price} setItem={setPrice} state={editPrice} setState={setEditPrice}/>

              <Stack direction="row" gap={1} >
                <Chip
                  label={available ? "In Stock" : "Out of Stock"}
                  color={available ? "success" : "error"}
                  sx={{ mt: 0.5 }}
                  component="div"
                />
                <Chip sx={{ mt: 0.5, color: "white" }} label={genre} component="div"></Chip>
              </Stack>
              <Button
                variant="outlined"
                onClick={() => SaveEdit()}
                sx={{ mt: 0.5, position: "relative", left: 70 }}
              >
                Edit
              </Button>
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
          <Container>
            <AvatarProfile />

            <GithubDescription />
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

type EditableValue = string | number | boolean | undefined

// generic Type
function EditModal<T extends EditableValue>({
  item,
  setItem,
  state,
  setState
}: {
  item: T,
  setItem: Dispatch<SetStateAction<T>>,
  state: boolean,
  setState: Dispatch<SetStateAction<boolean>>
}) {

  console.log(item)
  
  const SaveBtn = () => {
    setItem(item)
    setState(false)
    return state
  }
  
  return (
    <Modal
      open={state}
      onClose={SaveBtn}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "white", p: 1, borderRadius: 1 }}>
        <TextField
          value={item}
          onChange={(e) => setItem(e.target.value as T)}
        />
        <Button onClick={() => SaveBtn()}>OK</Button>
      </Box>
    </Modal>
  )
}
