import { BookResponse, Book } from "@/types/book";
import axios from "axios";

export const getBooks = async () => {
  const response = await axios.get("http://localhost:3000/api/books");
  if (response.statusText == "OK") {
    console.log(response.data)
    const data = response.data;
    const resData: BookResponse = data;
    const books = resData.books;
    return books
  }
};

export const getBook = async (id : string ) => {
  const response = await axios.get(`http://localhost:3000/api/books/${id}`);
  if (response.statusText === "OK") {
    const data: Book = await response.data.book;
    
    return data;
  }
};