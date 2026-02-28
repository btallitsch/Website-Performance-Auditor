import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    performance: Math.floor(Math.random() * 30) + 70,
    accessibility: ['Missing alt text', 'Low contrast'],
    seo: ['Missing meta description'],
    suggestions: ['Enable compression', 'Reduce JS']
  })
}