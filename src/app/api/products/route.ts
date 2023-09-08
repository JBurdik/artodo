import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
 
export async function GET() {
  const result = await prisma.product.findMany()
  return NextResponse.json({ result })
}