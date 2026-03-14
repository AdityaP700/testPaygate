import { paygateNext } from 'paygate-x402'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const check = await paygateNext(request, {
    apiKey: 'pg_7e3de203-977c-478c-8000-a8c9a14148eb',
    price: '0.001',
    payTo: '0xBeDfd7F12665594Da5bC466727d5DBAf1C1F9F11'
  })

  if (check) return check

  return NextResponse.json({
    match: 'India vs Australia',
    score: '287/4',
    overs: '45.2',
    status: 'Live',
    message: 'You paid 0.001 USDC to access this data!'
  })
}
