import React from 'react';
import { Link } from "react-dom";


function Product (props) {
    const {product} = props;
    return (
    <div>
        {product.title}
        <Link to={`/details/${product.id}`} >Details</Link>
    </div>)
}


export default Product;
