import {GraphQLClient} from "graphql-request"

const gqlClient = new GraphQLClient(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}/api/graphql`)

export default gqlClient;