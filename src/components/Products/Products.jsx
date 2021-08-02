import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product.jsx';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes.',
    price: '$5',
    image: 'https://assets.ajio.com/medias/sys_master/root/hd4/h99/14092964397086/-1117Wx1400H-460455972-black-MODEL.jpg',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple macbook.',
    price: '$10',
    image: 'https://images.pexels.com/photos/5429128/pexels-photo-5429128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
]

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid
            item 
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products;