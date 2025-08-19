import { gql } from "graphql-request";

export const ADD_USER = gql`
mutation Mutation($name: String!, $email: String!, $username: String!, $password: String!, $role: String!) {
  createUser(name: $name, email: $email, username: $username, password: $password, role: $role) {
    id
    name
    email
    username
    avatar
    role
  }
}`


export const ADD_PRODUCT = gql`
mutation Mutation($title: String!, $description: String!, $category: String!, $price: Float!, $stock: Int!, $imageUrl: String!) {
  addProduct(title: $title, description: $description, category: $category, price: $price, stock: $stock, imageUrl: $imageUrl) {
    category
    description
    id
    imageUrl
    price
    stock
    title
  }
}`


export const CREATE_SALE = gql`
mutation Mutation($productId: String!, $quantity: Int!) {
  createSale(productId: $productId, quantity: $quantity)
}
`

export const SIGNUP_QUERY = gql`
mutation Mutation($name: String!, $email: String!, $username: String!, $password: String!) {
  signup(name: $name, email: $email, username: $username, password: $password) {
    id
    name
    username
    email
    avatar
    role
  }
}`