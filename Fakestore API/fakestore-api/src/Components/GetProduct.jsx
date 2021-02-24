import React, { useState, useEffect } from "react";
import Axios from "axios";


const GetProduct = () => {
	const [product, setProduct] = useState(null);
	const [index, setIndex] = useState(1);

	useEffect(() => {
		const getData = async () => {
			const response = await Axios.get(`https://fakestoreapi.com/products/${index}`);
			setProduct(response.data);
		}
		getData();
	}, [index]);

	const renderProduct = () => {
		return (
			<div>
				<h4>{product.category}</h4>
				<img style={{ width: '300px' }} src={product.image} alt="something" />
				<h3>{product.title}</h3>
				<p><strong>{product.price}€</strong></p>
				<p>{product.description}</p>
				{index === 1 ? "" : <button onClick={() => setIndex(index - 1)}> Previous Product </button>}
				{index === 20 ? "" : <button onClick={() => setIndex(index + 1)}> Next Product </button>}
			</div>
		)
	}

	return product ? renderProduct() : ("waiting for data...");
}

export default GetProduct;
