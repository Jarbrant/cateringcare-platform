/*
  shop.js – Grundläggande logik för varukorgshantering på shop-sidan.
  Byggt för att vara lätt att utöka senare.
*/

// Block: DOM-element för varukorg och totalbelopp
const cartItemsEl = document.querySelector('.cart-items');
const cartTotalEl = document.querySelector('.cart-total');
const checkoutBtn = document.querySelector('.cart-summary .cta');

// Inlinjekommentar: Håller koll på antal produkter (växer senare till objekt/array)
let cartCount = 0;
let cartSum = 0;

// Block: Event-lyssnare för varje 'Lägg till'-knapp
document.querySelectorAll('.add-to-cart').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    /* 
      Här borde produktdata hämtas dynamiskt, men vi använder enkelt index nu.
      Detta expanderas framöver när API kopplas på.
    */
    cartCount += 1;
    cartSum += [95, 89, 110][i];
    cartItemsEl.innerHTML = `<p>${cartCount} st produkt(er) i varukorgen.</p>`;
    cartTotalEl.innerText = `Summa: ${cartSum} kr`;
    checkoutBtn.removeAttribute('disabled');
  });
});

// Inlinjekommentar: Checkout-knappen blockeras om varukorgen är tom (demo bara)
checkoutBtn.addEventListener('click', () => {
  if (cartCount > 0) {
    alert('Kassafunktion byggs ut i nästa steg!');
  }
});
