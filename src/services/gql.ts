import {GraphQLClient} from "graphql-request"


// console.log("gql endpoint: ",process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);


const gqlClient = new GraphQLClient(`/api/graphql`)

export default gqlClient;