import gql from 'graphql-tag';

export const GET_GUESTS = gql`
    query{
      guests{
        id
        name
        email
        phoneNumber
        checkInDate
        checkOutDate
        typeGuest
      }
    }
  `;

export const DELETE_GUEST = gql`
    mutation DeleteGuest($id: ID){
        deleteGuest(id: $id)
    }
`;

export const GUEST_BY_ID = gql`
  query GuestById($id: ID) {
    guestById(id: $id) {
      name
      email
      phoneNumber
      checkInDate
      checkOutDate
      typeGuest
    }
  }
`;

export const ADD_GUEST = gql`
  mutation AddGuest($guest: GuestInput) {
    addGuest(guest: $guest ) {
      id
      name
      email
      phoneNumber
      checkInDate
      checkOutDate
      typeGuest
    }
  }
`;

export const UPDATE_GUEST = gql`
  mutation UpdateGuest($updateGuestId: ID, $guest: GuestInput) {
    updateGuest(id: $updateGuestId, guest: $guest) {
      id
      name
      email
      phoneNumber
      checkInDate
      checkOutDate
      typeGuest
    }
  }
`;