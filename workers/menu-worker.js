/**
 * Cloudflare Worker – Menu API
 * Syfte: Hanterar GET-förfrågningar till /api/menu.
 * Används för att leverera menydata till frontend (t.ex. shop & startsida).
 * Grundversion: returnerar statisk meny; byggs ut till dynamik vid integration med databas eller extern API.
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Hanterar inkommande requests.
 * @param {Request} request - Inkommande HTTP-request
 * @returns {Promise<Response>} - HTTP-response med menydata eller felmeddelande
 */
async function handleRequest(request) {
  const url = new URL(request.url);

  // Block: Hanterar endast GET /api/menu, annars fel 404
  if (request.method === 'GET' && url.pathname === '/api/menu') {
    // Menydata – statisk array tills vidare
    const menu = [
      {
        id: 1,
        name: "Caesarsallad",
        description: "Grillad kyckling, parmesan, krutonger",
        price: 95
      },
      {
        id: 2,
        name: "Vegetarisk lasagne",
        description: "Ricotta, spenat, färska tomater",
        price: 89
      },
      {
        id: 3,
        name: "Lax med dillstuvad potatis",
        description: "Färsk lax, dill, potatis, citron",
        price: 110
      }
    ];
    // Block: Svarar med JSON + CORS-header
    return new Response(JSON.stringify(menu), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
  // Om fel endpoint/metod: returnera 404
  return new Response(JSON.stringify({error: "Not found"}), {
    status: 404,
    headers: { 'Content-Type': 'application/json' }
  });
}
