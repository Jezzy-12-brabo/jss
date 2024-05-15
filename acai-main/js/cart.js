const cart = {
  total: 0
}

function addToCart(title, price, img) {
  openCart()

  cart.total += price;

  document.querySelector(".cart-lines").innerHTML += `
  <div class="cart-line" data-price='${price}'>
  <img src="https://${img}" alt="">
  <div>
      <p>${title}</p>
      <span>R$ ${price}</span>
  </div>
  <div class="close-button" onclick="removeFromCart(event)">
      <ion-icon name="close-outline"></ion-icon>
  </div>
</div>
  `

  changeTotal(cart.total)
}

function removeFromCart(event) {
  const el = event.target.closest(".cart-line")

  const price = el.dataset.price;

  cart.total -= Number(price);

  changeTotal(cart.total)

  el.remove()
}

function toggleCart() {
  document.querySelector(".cart").classList.toggle('close');
}

function openCart() {
  document.querySelector(".cart").classList.remove('close');
}

function changeTotal(total) {
  document.querySelector(".cart .total span").innerHTML = `${new Intl.NumberFormat('pt-BR', { style: "currency", currency: "BRL" }).format(total)}`
}