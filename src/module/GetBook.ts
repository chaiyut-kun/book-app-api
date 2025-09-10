import { BookResponse } from "@/types/book";
import axios from "axios";

const getData = async () => {
  const response = await axios.get("http://localhost:3000/api/books");
  if (response.statusText == "OK") {
    console.log(response.data)
    const data = response.data;
    const resData: BookResponse = data;
    const books = resData.books;
    return books
  }
};