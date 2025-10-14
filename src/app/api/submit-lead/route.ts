import { NextResponse } from 'next/server'


export async function POST(req: Request) {
const data = await req.json()
// TODO: send to CRM / email provider
return NextResponse.json({ ok: true })
}