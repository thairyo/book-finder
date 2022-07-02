import React, { useState } from "react";
import axios from "axios";
import { Input, Stack, Typography, Button } from "@mui/material";
import { LocalLibrary } from "@mui/icons-material";
import BookCard from "./BookCard";

interface Books {
  name: string;
  url: string;
}

const Main = () => {
  const [bookData, setBooksData] = useState<Books[]>([]);
  const [search, setSearch] = useState<string>("");

  const getBooks = async () => {
    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBuEUFy1AqCWBG8KEwFmHwqUKrTLvu15kI&maxResults=40`
      )
      .then((res) => setBooksData(res.data.items))
      .catch((err) => console.log(err));
  };

  console.log(bookData);

  return (
    <Stack
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      padding="100px 200px 100px 200px"
    >
      <Stack>
        <LocalLibrary />
        <Typography color="#fff" fontSize="50px" fontWeight={700}>
          bookfinder
        </Typography>
      </Stack>
      <Stack maxWidth="700px" padding="50px 0 50px 0">
        <Typography fontFamily="Catamaran,san-serif" fontSize="22px">
          Whether you're an avid bookworm or a holiday e-book browser
        </Typography>
        <Typography fontFamily="Catamaran,san-serif" fontSize="22px">
          <span style={{ fontWeight: "bold" }}>bookfinder</span> can help you to
          find your next favorite! Enter your favorite author into the search
          box down below to find some other reads!
        </Typography>
      </Stack>
      <Stack direction="row" pb="90px" spacing={1}>
        <Input
          style={{ width: "450px", color: "#fff", fontSize: "18px" }}
          type="text"
          placeholder="Choose your favorite book..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outlined" onClick={getBooks}>
          Search
        </Button>
      </Stack>
      <BookCard books={bookData} />
    </Stack>
  );
};

export default Main;
