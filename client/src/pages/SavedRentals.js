import React from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Auth from "../utils/auth";
import { removeRentalId, saveRentalIds } from "../utils/localStorage";
import { GET_ME } from "../utils/queries";
import { REMOVE_BOOK } from "../utils/mutations";

const Savedrentals = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];

  const [removeRental, { error }] = useMutation(REMOVE_BOOK);

  const handleDeleteRental = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      const response = await removeRental({
        variables: { rentalId: rentalId },
      });

      if (!response) {
        throw new Error("something went wrong!");
      }
      removeRentalId(rentalId);
    } catch (err) {
      console.error(error);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  // sync localStorage with what was returned from the userData query
  const savedRentalIds = userData.Savedrentals.map((book) => book.bookId);
  saveRentalIds(savedBookIds);

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Your saved rentals!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.Savedrentals.length
            ? `Viewing ${userData.Savedrentals.length} saved ${
                userData.SavedRentals.length === 1 ? "rental" : "rentals"
              }:`
            : "You have no saved books!"}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border="dark">
                {book.image ? (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteBook(book.bookId)}
                  >
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
