import productImage1 from '../src/assets/Photo 1.jpg';
import productImage2 from '../src/assets/Photo 2.jpg';
import productImage3 from '../src/assets/Photo 3.jpg';


export const products = [{
    id: 1,
    name: 'Product 1',
    price: 100000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: productImage1,
    quantity: 10
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: productImage2,
    quantity: 5
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere repudiandae rerum',
    image: productImage3,
    quantity: 3
  }
]

export const cartItems = [
    products[0],
    products[1],
    products[2]
]