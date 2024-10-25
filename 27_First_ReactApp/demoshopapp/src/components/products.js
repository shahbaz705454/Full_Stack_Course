import './products.css';
import ProductItem from './Productitem';
import Cards from './cards';

function Products(props) {
    return (
        <Cards className='products'>
            <ProductItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].Date}
            />
            <ProductItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].Date}
            />
            <ProductItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].Date}
            />
            







        </Cards>

    )
}

export default Products;