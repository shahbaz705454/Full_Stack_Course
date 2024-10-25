import './Productitem.css';
import ProductDate from './ProductDate';
import Cards from './cards';
import { useState } from 'react';

function ProductItem(props) {

    const [title,setTitle] = useState(props.title);

    function clickHandler(){
        setTitle("PopCorn");
        console.log("button clicked");
    }


    return (
        <Cards className='product-item'>

            <ProductDate
                date={props.date}>

            </ProductDate>

            <div className='product-item_description'>
                <h2>{title}</h2>
               
             

            </div>
            <button className='btn' onClick={clickHandler}>Add to cart</button>

        </Cards>

    )

}

export default ProductItem;