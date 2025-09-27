import { BookCreate, BookUpdate } from "@/types/book";
import axios from "axios";

export class BookService {
    static API_PATH = "http://localhost:3000/api"
    // create book
    static async CreateBook(book: BookCreate) {
        const response = await axios.post(`${this.API_PATH}/books`, book, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        return response;
    }

    static async DeleteBook(id: string) {
        const response = await axios.delete(`${this.API_PATH}/books/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        return response;
    }
    
    static async UpdateBook(id: string, book: BookUpdate) {
        try{
            const response = await axios.put(`${this.API_PATH}/books/${id}`, book, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            if (response.status === 200) {
                return response;
            }
        }catch(error : any){
            // console.log("Error",error.response) 
            return error.response;
        }
    }
    
}