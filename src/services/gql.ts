// import {GraphQLClient} from "graphql-request"


// // console.log("gql endpoint: ",process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);


// const gqlClient = new GraphQLClient(`/api/graphql`)

// export default gqlClient;

import { GraphQLClient } from "graphql-request";

const endpoint =
  typeof window === "undefined"
    ? `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/graphql`
    : "/api/graphql";

const gqlClient = new GraphQLClient(endpoint);

export default gqlClient;