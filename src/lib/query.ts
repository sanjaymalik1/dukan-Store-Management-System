import { gql } from "graphql-request";

export const LOGIN_USER = gql`
query Query($userCredential: String!, $password: String!) {
  loginUser(userCredential: $userCredential, password: $password)
}`

export const GET_ALL_USERS = gql`
query Query {
  getAllUsers {
    id
    name
    role
    username
    email
    avatar
  }
}`


export const GET_ALL_PRODUCTS= gql`
query Query {
  getAllProducts {
    title
    id
    category
    description
    imageUrl
    price
    stock
  }
}`


export const GET_PRODUCT = gql`
query Query($getProductId: String!) {
  getProduct(id: $getProductId) {
    id
    title
    description
    category
    price
    stock
    imageUrl
    sales {
      id
      productId
      quantity
      createdAt
    }
  }
}
`