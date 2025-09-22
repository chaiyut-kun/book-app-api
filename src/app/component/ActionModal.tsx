"use client";
import { ChangeEvent, useState } from "react";
import { Button, Typography, Box, Modal, Input, Grid, TextField, Checkbox, FormControl, SelectChangeEvent, MenuItem, InputLabel, Select } from "@mui/material";
import { BookService } from "@/lib/BookService";
import { BookCreate } from "@/types/book";

export function AddBookModal({ onAddSuccess }: { onAddSuccess?: () => void }) {

    const testBook = {
        title: 'test',
        author: 'test',
        description: 'test',
        genre: 'test',
        year: 2025,
        price: 10,
        available: true
    }

    const [isOpen, setIsOpen] = useState(false);
    const [book, setBook] = useState({
        title: '',
        author: '',
        description: '',
        genre: '',
        year:  0,
        price: 0,
        available: false
    } as BookCreate)

    const [year, setYear] = useState(0);
    const [available, setAvailable] = useState(false);


    const handleSubmit = async () => {
        setBook({
            ...book,
            year: year,
            available: available
        })


        // const res = await BookService.CreateBook(book)
        // if (res.status === 201) {
        //     setIsOpen(true);
        // }
        console.log(book)
    }
    const handleSuccess = async () => {
        await handleSubmit();
        // setIsOpen(false);
        // onAddSuccess?.();
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBook(
            { ...book, [name]: value }
        )
        console.log(book)

    }

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBook(
            { ...book, available: e.target.checked }
        )
        console.log(book)
    }


    return (
        <>
            <Button variant="outlined" onClick={() => setIsOpen(true)}>Add Book</Button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} >
                <Box sx={{ px: 4, py: 4, bgcolor: 'white', borderRadius: 2, width: "40%", margin: "auto", position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -20%)" }}>
                    <Typography variant="h6" color="black">Add Book</Typography>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={6}>
                                <TextFieldInput name="title" value={book.title} onChange={handleTextChange} />
                            </Grid>
                            <Grid size={6}>
                                <TextFieldInput name="author" value={book.author} onChange={handleTextChange} />
                            </Grid>
                            <Grid size={6} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <TextFieldInput name="genre" value={book.genre} onChange={handleTextChange} width={120}/>
                                <TextFieldInput name="price" value={book.price} onChange={handleTextChange} width={60}/>
                            </Grid>
                            <Grid size={6}>
                                <YearSelect year={year} setYear={setYear} />
                            </Grid>
                            <Grid size={6}>
                                <TextFieldInput name="description" value={book.description} onChange={handleTextChange} />
                            </Grid>
                            <Grid size={6} mt={4}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2, height: 12 }}>
                                    <Checkbox
                                        sx={{ marginLeft: -1 }}
                                        value={book.available}
                                        name="available"
                                        onChange={handleCheckboxChange}
                                    />
                                    <Typography color="black" marginLeft={-3} variant="caption">Available?</Typography>
                                    <Button variant="outlined" onClick={handleSuccess}>Submit</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export function DeleteBookModal({ id, onDeleteSuccess }: { id: string; onDeleteSuccess?: () => void }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleDelete = async (id: string) => {
        const res = await BookService.DeleteBook(id)
        if (res.status === 200) {
            console.log("Book deleted")
            setIsOpen(true);
        }
    }

    const handleSuccess = () => {
        setIsOpen(false);
        onDeleteSuccess?.();
    }

    return (
        <>
            <Button variant="contained" color="error" onClick={() => handleDelete(id)}>Delete</Button>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, width: "50%", margin: "auto", position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -100%)", }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        ลบหนังสือเรียบร้อยแล้ว
                    </Typography>
                    <Button variant="outlined" onClick={handleSuccess}>ตกลง</Button>
                </Box>
            </Modal>
        </>
    )
}

function YearSelect({ year, setYear }: { year: number; setYear: (year: number) => void }) {





    const handleYearChange = (event: SelectChangeEvent<number>) => {
        setYear(event.target.value as number)
    }

    return (
        <>
            <Box sx={{ width: "90%" }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Year</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={year}
                        label="year"
                        onChange={handleYearChange}
                    >
                        <MenuItem value={2018}>2018</MenuItem>
                        <MenuItem value={2019}>2019</MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                    </Select>
                </FormControl>
            </Box >
        </>
    )
}

// textfield input

function TextFieldInput({ name, value, onChange, width }: { name: string; value: string | number; onChange: (e: ChangeEvent<HTMLInputElement>) => void; width?: number }) {
    return (
        <TextField
            value={value}
            name={name}
            label={name}
            type="text"
            variant="standard"
            onChange={onChange}
            sx={{ width: width }}
        />
    )
}