import React from "react";
import {
  Jumbotron,
  Card,
  Button,
  Container,
} from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { removeRentalId, saveRentalIds } from "../utils/localStorage";
import { GET_ME } from "../utils/queries";
import { REMOVE_RENTAL } from "../utils/mutations";
const SavedRentals = () => {
  const { data } = useQuery(GET_ME);
  const userData = data?.me || [];

  const [removeRental,{ error }] = useMutation(REMOVE_RENTAL);
  const handleDeleteRental = async (rentalId) => {
    const token = Auth.loggedIn()
 ? Auth.getToken() : null; if (!token) {
return false;
 }  
 try {
  const response = await removeRental({
    variables: { rentalId: rentalId },
  });

  if (!response) {
    throw new Error("Sorry, something went wrong");
  }
  removeRentalId(rentalId);
 } catch (err) {
  console.error(error);
 }
}; 

// sync localStorage with what was returned from the userData query

const savedRentalIds = userData.savedRentals.map((rental) => rental.rentalId);
saveRentalIds(saveRentalIds);


  return (
    <>

    <Jumbotron fluid className="text-light bg-dark"> <Container>
    <h1>Viewing saved books!</h1>
  </Container>
  </Jumbotron>
  <Container>
    <h2>
      {userData.savedRentals.length ? `Viewing ${userData.savedRentals.length} saved ${userData.savedRentals.length === 1 ? "rental" : "rentals"}:`
      : "No saved rentals!"
      }
    </h2>
    {userData.savedRentals.map((rental) => {
            return (
              < Card key={rental.rentalId} border="dark">
    <Card.Body>
    <Card.Title>{rental.title}</Card.Title>
    <Card.Text>(rental.description)</Card.Text>
    <Button
 className="btn-block btn-danger"
 onClick={() => handleDeleteRental(rental.rentalId)}
>
 Delete this Rental!
</Button>
</Card.Body>
</Card>
  );
  })}
  </Container>
</>
  );
};

export default SavedRentals;
