import React, { useState } from "react";
import {
  Stack,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Grid,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface BookCard{
  props: object;
  item: {
    volumeInfo:{
      imageLinks: {
        smallThumbnail:string;
      }
    }
  }
}

const BookCard = (props: any) => {
  const { books } = props;

  const [show, setShow] = useState<boolean>(false);
  const [bookItem, setItem] = useState();

  return (
    <Stack style={{ textAlign: "left" }}>
      {books.map((item:any) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        if (thumbnail !== undefined) {
          return (
            <Accordion
              style={{
                minWidth: "1200px",
                backgroundColor: "#464657 ",
                margin: "5px",
              }}
              onClick={() => {
                setShow(true);
                setItem(item);
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{
                  padding: "20px",
                }}
              >
                <img style={{ width: "120px" }} src={thumbnail} alt="book" />
                <Box sx={{ margin: "2px 0 0 20px" }}>
                  <Typography
                    fontFamily="Catamaran,san-serif"
                    fontSize="24px"
                    color="#c4c4c4"
                  >
                    {item.volumeInfo.title}
                  </Typography>
                  <Typography
                    fontFamily="Catamaran,san-serif"
                    fontSize="18px"
                    color="#fff"
                  >
                    {item.volumeInfo.authors}
                  </Typography>
                  <Typography
                    fontFamily="Catamaran,san-serif"
                    fontSize="18px"
                    color="#fff"
                  >
                    {item.volumeInfo.language}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails
                style={{ backgroundColor: "#2d2d3b", padding: "30px" }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    <Box>
                      <Typography
                        fontFamily="Catamaran,san-serif"
                        fontSize="24px"
                        color="#fff"
                      >
                        {item.volumeInfo.title}
                      </Typography>
                      <img
                        style={{ width: "130px", marginLeft: "5px" }}
                        src={thumbnail}
                        alt="book"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack
                      direction="column"
                      style={{
                        fontSize: "18px",
                        color: "#d5d5d5",
                        marginTop: "50px",
                      }}
                    >
                      <Stack direction="row" spacing={1}>
                        <Typography fontWeight={500}>Categories:</Typography>
                        <Typography>{item.volumeInfo.categories}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography fontWeight={500}>Author(s):</Typography>
                        <Typography>{item.volumeInfo.authors}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography fontWeight={500}>Publisher:</Typography>
                        <Typography>{item.volumeInfo.publisher}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography fontWeight={500}>Publish Date:</Typography>
                        <Typography>{item.volumeInfo.publishedDate}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography fontWeight={500}>Page Count:</Typography>
                        <Typography>
                          {item.volumeInfo.pageCount + ` pages`}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography fontWeight={500}>
                          Average Rating:
                        </Typography>
                        <Typography>
                          {item.volumeInfo.averageRating || "5.0/5.0"}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>

                <Stack style={{ maxWidth: "1000px", margin: "20px 0 20px 0" }}>
                  <Typography
                    style={{
                      fontSize: "24px",
                      fontWeight: 500,
                      color: "#d0d0d0",
                    }}
                  >
                    Book description:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#d0d0d0",
                      marginTop: "10px",
                    }}
                  >
                    {item.volumeInfo.description}
                  </Typography>
                </Stack>
                <Stack spacing={2} direction="row">
                  <Button
                    href={item.accessInfo.webReaderLink}
                    variant="contained"
                  >
                    Read a sample
                  </Button>
                  <Button href={item.saleInfo.buyLink} variant="outlined">
                    Buy this book
                  </Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
          );
        }
      })}
    </Stack>
  );
};

export default BookCard;
