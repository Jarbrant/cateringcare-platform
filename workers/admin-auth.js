/**
 * Enkel lösenordsskyddad Worker för adminpanel.
 * Byt ut USERNAME och PASSWORD till dina egna!
 */
const USERNAME = "admin";
const PASSWORD = "Bytt123";

export default {
  async fetch(request, env, ctx) {
    // Endast skydda adminpanelen! (t.ex. under /admin/)
    if (!request.url.includes("/admin/")) {
      // Låt all övrig trafik passera "oskyddad"
      return fetch(request);
    }
    const auth = request.headers.get("authorization");
    if (auth) {
      // "Basic base64(user:pass)"
      const [scheme, encoded] = auth.split(" ");
      if (scheme === "Basic") {
        const decoded = atob(encoded);
        const [user, pass] = decoded.split(":");
        if (user === USERNAME && pass === PASSWORD) {
          return fetch(request); // Släpp in!
        }
      }
    }
    // Svara med Basic Auth-ruta om fel uppgift eller ingen auth
    return new Response("401 Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Adminpanel"'
      }
    });
  }
};
