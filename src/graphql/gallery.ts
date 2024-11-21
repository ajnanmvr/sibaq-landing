import { gql } from "@apollo/client";

export const GET_GALLERY = gql`
  query Gallery {
    gallery {
      photo
    }
  }
`;