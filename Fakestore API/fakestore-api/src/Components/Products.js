import React from 'react';
import Product from "./Product";

function Products(props) {

	const { products } = props;

	const getProducts = () => {
		let productList;
			productList = products.map(product => {
				return <Product key={product.id} product={product} />
			});

			return productList;
	}
	

	return (
		<div>
			{getProducts()}
		</div>
	)
}

export default Products
