export async function GET() {
  return new Response(JSON.stringify({
    name: 'LuckyTrading777',
    status: 'ok',
    time: new Date().toISOString(),
  }), {
    headers: { 'content-type': 'application/json; charset=utf-8' }
  })
}
