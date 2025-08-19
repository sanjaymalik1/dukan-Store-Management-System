// import type { NextRequest } from "next/server";
// import type RouteContext  from "next";

// import { ApolloServer } from "@apollo/server";
// import { startServerAndCreateNextHandler } from "@as-integrations/next";
// // import { NextRequest } from "next/server";
// import { createUser, getAllUsers, loginUser, updateRole, updateUserProfile } from "./resolvers/functions";
// import typeDefs from "./type-defs";
// import { getUserFromCookies } from "@/lib/helper";
// import { addProduct, createSale, getAllProducts, getProduct } from "./resolvers/products";



// const resolvers = {
//   Query: {
//     loginUser: loginUser,
//     currentUser : getUserFromCookies,
//     getAllUsers : getAllUsers,
//     getAllProducts,
//     getProduct
//   },

//   Mutation : {
//     createUser : createUser,
//     updateUserRole : updateRole,
//     updateUserProfile,
//     addProduct,
//     createSale
//   }
// };



// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });


// // Typescript: req has the type NextRequest
// // const handler = startServerAndCreateNextHandler<NextRequest>(server, {
// //   context: async req => ({ req }),
// // });

// // export { handler as GET, handler as POST };

// const handler = startServerAndCreateNextHandler<NextRequest>(server, {
//   context: async req => ({ req }),
// });

// // Type assertion to fix type error
// export const GET = handler as unknown as (req: NextRequest, context: typeof RouteContext) => Promise<Response>;
// export const POST = handler as unknown as (req: NextRequest, context: typeof RouteContext) => Promise<Response>;


import { NextRequest, NextResponse } from "next/server";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { createUser, getAllUsers, loginUser, updateRole, updateUserProfile } from "./resolvers/functions";
import typeDefs from "./type-defs";
import { getUserFromCookies } from "@/lib/helper";
import { addProduct, createSale, getAllProducts, getProduct } from "./resolvers/products";

const resolvers = {
  Query: {
    loginUser: loginUser,
    currentUser: getUserFromCookies,
    getAllUsers: getAllUsers,
    getAllProducts,
    getProduct
  },

  Mutation: {
    createUser: createUser,
    updateUserRole: updateRole,
    updateUserProfile,
    addProduct,
    createSale
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextRequest) => ({ req }),
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}