import { useState } from 'react';
import './productForm.css';

function ProductForm(){
    const [title,setTitle] = useState('');
    const [date,setDate] =useState('');


    function titleChangeHandler(event){
        setTitle(event.target.value);
        // console.log(event.target.value);
        
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
        // console.log(event.target.value);
        console.log(title);
        console.log(date);

    }

    return(<form className='form'>
        <div className='new-Product_title'>
            <label >Title : </label>
            <input type='text' onChange={titleChangeHandler}></input>
        </div>
        <div className='new-Product_date'>
            <label>Date : </label>
            <input type='date' onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
        </div>
        <div className='new-Product_button'>
            <button type='submit'>Add product</button>
        </div>
    </form>);

}
export default ProductForm;