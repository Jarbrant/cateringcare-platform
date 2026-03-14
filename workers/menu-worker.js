/**
 * Cloudflare Worker – Menu API (förklarat i tidigare svar)
 */
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  if (request.method === 'GET' && url.pathname === '/api/menu') {
    const menu = [
      { id: 1, name: "Caesarsallad", description: "Grillad kyckling, parmesan, krutonger", price: 95 },
      { id: 2, name: "Vegetarisk lasagne", description: "Ricotta, spenat, färska tomater", price: 89 },
      { id: 3, name: "Lax med dillstuvad potatis", description: "Färsk lax, dill, potatis, citron", price: 110 }
    ];
    return new Response(JSON.stringify(menu), {
      status: 200,
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" }
    });
  }
  return new Response(JSON.stringify({error: "Not found"}), {
    status: 404, headers: { 'Content-Type': 'application/json' }
  });
}
