import React from 'react';
import "./ProductDate.css";
const ProductDate = (props)=>{
    const day = props.date.getDate();
    const month = props.date.getMonth();
    const year = props.date.getFullYear();
    return (
        <div className='product-Date'>
            <div className='product-date_month'>{month}</div>
            <div className='product-date_year'>{year}</div>
            <div className='product-date_day'>{day}</div>


        </div>
    );
};

export default ProductDate;