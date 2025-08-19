import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    loginUser(userCredential : String!, password : String!) : Boolean!
    currentUser : User,
    getAllUsers : [User],
    getAllProducts : [Product],
    getProduct(id : String!) : Product
}
  type Mutation{
    createUser(name : String!, email : String!, username : String!, password : String!, role : String!) : User,
    updateUserRole(id : String!, role : String!) : Boolean,
    updateUserProfile(id : String!, name : String, email : String, username : String, avatar : String) : Boolean,
    addProduct(title: String!, description : String!, category: String!, price: Float!, stock: Int!, imageUrl: String!) : Product,
    createSale(productId : String!, quantity : Int!) : Boolean
  }

  type User{
    id : String,
    name : String,
    username : String,
    email : String,
    avatar : String,
    role : String
  }

  type Product{
  id:String  
  title: String
  description: String
  category: String
  price: Float
  stock: Int
  imageUrl:String,
  sales : [Sale]
  }

  type Sale{
  id : String,
  productId : String,
  quantity : Int,
  createdAt : String}
`;

export default typeDefs;