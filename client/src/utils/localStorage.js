// export const getSavedRentalIds = () => {
//     const savedRentalIds = localStorage.getItem('saved_rentals')
//       ? JSON.parse(localStorage.getItem('saved_rentals'))
//       : [];
  
//     return savedRentalIds;
//   };
  
//   export const saveRentalIds = (rentalIdArr) => {
//     if (rentalIdArr.length) {
//       localStorage.setItem('saved_rentals', JSON.stringify(rentalIdArr));
//     } else {
//       localStorage.removeItem('saved_rentals');
//     }
//   };
  
//   export const removeRentalId = (rentalId) => {
//     const savedRentalIds = localStorage.getItem('saved_rentals')
//       ? JSON.parse(localStorage.getItem('saved_rentals'))
//       : null;
  
//     if (!savedRentalsIds) {
//       return false;
//     }
  
//     const updatedSavedRentalIds = savedRentalIds?.filter((savedRentalId) => savedRentalId !== rentalId);
//     localStorage.setItem('saved_rental', JSON.stringify(updatedSavedRentalIds));
  
//     return true;
//   };
  