import { products, findProductById } from './products.js'
import { makeCards } from './cards.js'

const carrito = []

const btnCarrito = document.getElementById('btn-carrito')
const numberCarrito = document.getElementsByClassName('rounded-pill')[0]
const mainElement = document.getElementsByTagName('main')[0]
const productElements = makeCards(products)
const toastBody = document.getElementsByClassName('toast-body')[0]

mainElement.append(productElements)
numberCarrito.innerText = carrito.length

const addToCart = (event) => {
  event.preventDefault()
  const newProduct = findProductById(parseInt(event.target.dataset.productId), products)
  if (newProduct) {
    carrito.push(newProduct)
    numberCarrito.innerText = carrito.length >= 10 ? '+9' : carrito.length
  }
}

const showCart = () => {
  if (carrito.length > 0) {
    let textContent = `
    Este es el contenido de tu carrito:
  `
    for (let i = 0; i < carrito.length; i++) {
      textContent += `\n${i + 1} - ${carrito[i].name} - Precio: $${carrito[i].price}`
    }
    textContent += `\n\nEl monto total asciende a los: $${calculateTotal()}`
    alert(textContent)
  } else {
    alert('Su carrito se encuentra vacio')
  }
}

const calculateTotal = () => {
  const sum = carrito.reduce((total, current) => {
    return total + current.price
  }, 0)
  return sum.toFixed(2)
}
// Event Listeners
btnCarrito.addEventListener('click', showCart)

const btnsAddProduct = document.getElementsByClassName('add-product')
for (let i = 0; i < btnsAddProduct.length; i++) {
  btnsAddProduct[i].addEventListener('click', addToCart)
}

const toastTriggers = document.getElementsByClassName('add-product')
const toastLiveExample = document.getElementById('liveToast')
for (let i = 0; i < toastTriggers.length; i++) {
  toastTriggers[i].addEventListener('click', (event) => {
    const product = findProductById(parseInt(event.target.dataset.productId), products)
    if (product) {
      toastLiveExample.getElementsByClassName('toast-body')[0].innerText = `${product.name} added to cart successfully`
      const toast = new bootstrap.Toast(toastLiveExample)
      toast.show()
    }
  })
}
