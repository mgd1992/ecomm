import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="cart"
export default class extends Controller {
  initialize() {

    //console.log("cart controller initialize")
    const cart = JSON.parse(localStorage.getItem("cart"))
    if (!cart) {
      return
    }
    let total = 0
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i]
      total += item.price * item.quantity
      const div = document.createElement("div")
      div.classList.add("mt-2")
      div.innerText = `Item: ${item.name} - $${item.price/100.0} - Size: ${item.size} - Quantity: ${item.quantity}`
      const deletebutton = document.createElement("button")
      deletebutton.innerText = "Remove"
      deletebutton.value = item.id
      deletebutton.classList.add("bg-gray-500", "rounded", "text-white", "px-2", "py-1", "ml-2")
      deletebutton.addEventListener("click", this.removeFromCart)
      div.appendChild(deletebutton)
      this.element.prepend(div)
    }

    const totalEl = document.createElement("div")
    totalEl.innerText = `Total: $${total/100.0}`
    let totalContainer = document.getElementById("total")
    totalContainer.appendChild(totalEl)
  }

  clear() {
    localStorage.removeItem("cart")
    window.location.reload()
  }

  removeFromCart(e) {
    const cart = JSON.parse(localStorage.getItem("cart"))
    const id = e.target.value
    const index = cart.findIndex(item => item.id === id)
    cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart))
    window.location.reload()
  }

}
