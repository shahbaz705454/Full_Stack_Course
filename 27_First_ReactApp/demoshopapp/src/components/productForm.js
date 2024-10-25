import { useState } from 'react';
import './productForm.css';

function ProductForm() {

    // const [fullProductInout, setfullProductInput] = useState({
    //     title:'',
    //     date:''
    // });
   




        const [newTitle,setTitle] = useState('');
        const [newDate,setDate] =useState('');


        function titleChangeHandler(event){
            setTitle(event.target.value);
            // console.log(event.target.value);

        }

        function dateChangeHandler(event){
            setDate(event.target.value);
            // console.log(event.target.value);
            // console.log(title); 
            // console.log(date);

        }
        function submitHandler(event){
            event.preventDefault();

            const productData={
                title:newTitle,
                date :newDate
            };
            console.log(productData);
            setTitle('');
            setDate('');

        }

    return (<form className='form' onSubmit={submitHandler}>
        <div className='new-Product_title'>
            <label >Title : </label>
            <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-Product_date'>
            <label>Date : </label>
            <input type='date' value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
        </div>
        <div className='new-Product_button'>
            <button type='submit'>Add product</button>
        </div>
    </form>);

}
export default ProductForm;