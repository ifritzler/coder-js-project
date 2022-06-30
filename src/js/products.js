const products = [
  {
    id: 1,
    name: 'Mochila de traslado',
    description: 'Descripcion corta del producto que se vende',
    price: 999.9,
    image: './src/images/product-test.jpg'
  },
  {
    id: 2,
    name: 'Rascador Mediano - Gato',
    description: 'Descripcion corta del producto que se vende',
    price: 199.9,
    image: './src/images/rascador-md.png'
  },
  {
    id: 3,
    name: 'Rascador de pared',
    description: 'Descripcion corta del producto que se vende',
    price: 299.9,
    image: './src/images/rascador-pared.jpg'
  },
  {
    id: 4,
    name: 'Primer producto',
    description: 'Descripcion corta del producto que se vende',
    price: 399.9,
    image: './src/images/product-test.jpg'
  },
  {
    id: 5,
    name: 'Primer producto',
    description: 'Descripcion corta del producto que se vende',
    price: 499.9,
    image: './src/images/product-test.jpg'
  },
  {
    id: 6,
    name: 'Primer producto',
    description: 'Descripcion corta del producto que se vende',
    price: 599.9,
    image: './src/images/product-test.jpg'
  },
  {
    id: 7,
    name: 'Primer producto',
    description: 'Descripcion corta del producto que se vende',
    price: 699.9,
    image: './src/images/product-test.jpg'
  },
  {
    id: 8,
    name: 'Primer producto',
    description: 'Descripcion corta del producto que se vende',
    price: 799.9,
    image: './src/images/product-test.jpg'
  },
  {
    id: 9,
    name: 'Primer producto',
    description: 'Descripcion corta del producto que se vende',
    price: 899.9,
    image: './src/images/product-test.jpg'
  }
]

const findProductById = (id, products) => {
  const foundElement = products.find((product, index) => {
    return product.id === id
  })
  return foundElement
}

export { products, findProductById }
