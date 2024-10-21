import './Productitem.css;
function ProductItem(props){

    const itemName = props.name;
    return(
        <div>
            <p className="name">{itemName}</p>
            {props.children}
        </div>

    )

}

export default ProductItem;