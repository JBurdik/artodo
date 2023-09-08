import { prisma } from '@/lib/prisma'
import { Product } from '@prisma/client'
import { NextResponse } from 'next/server'
 
export async function GET() {
  const data = await prisma.product.findMany()
  return NextResponse.json( data )
}