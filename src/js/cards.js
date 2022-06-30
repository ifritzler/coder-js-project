function createCard (product) {
  const container = document.createElement('div')
  container.classList.add('col')
  const content = `
    <div class="card" style="width: 18rem;">
      <img src="${product.image}" class="card-img-top" alt="Fotografia de producto">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">Precio: $${product.price}</p>
        <a href="#" class="btn btn-primary add-product" data-product-id="${product.id}">Añadir</a>
      </div>
    </div>
  `
  container.innerHTML = content
  return container
}

function makeCards (products) {
  const gridProducts = document.createElement('div')
  gridProducts.classList.add('row')
  gridProducts.classList.add('row-cols-1')
  gridProducts.classList.add('row-cols-md-3')
  gridProducts.classList.add('g-4')

  for (let i = 0; i < products.length; i++) {
    const productElement = createCard(products[i])
    gridProducts.append(productElement)
  }
  return gridProducts
}

export { makeCards }
