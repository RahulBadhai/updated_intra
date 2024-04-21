// import { NextApiRequest, NextApiResponse } from "next";
// import { getServerSession } from "next-auth";
// // import { getSession } from 'next-auth/client';
// import { getSession } from "next-auth/react";
// import { headers } from "next/headers";
// import { testData } from "./app/api/test";
// import { getToken } from "next-auth/jwt";
// import { NextRequest, NextResponse } from "next/server";
// import { authOptions } from "./app/api/auth/[...nextauth]/route";
// // import { authOptions } from "./app/api/auth/[...nextauth]";

import { NextResponse } from "next/server"

// export async function middleware(
//   req: NextRequest,
//   res: NextResponse,
// ) {
//   try {
//     const session = await getToken({ req })
//     console.log("token:",session)    // const headerData = headers();
//     // console.log(headerData)
//   } catch (error) {
//     // Error occurred during authentication process, send 500 Internal Server Error response
//     console.error("Error in authentication middleware:", error);
//     // res.statusCode = 500;
//     // res.json({ error: "Internal Server Error" });
//   }
// }

export const middleware =()=>{
  return NextResponse.next();
}

