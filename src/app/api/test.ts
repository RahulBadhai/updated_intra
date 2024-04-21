import { getToken } from 'next-auth/jwt'
import { headers } from 'next/headers'
import { NextRequest } from 'next/server'
export const  testData = async(req:NextRequest)=>{
    const token = await getToken({ req })
    console.log(token)
}