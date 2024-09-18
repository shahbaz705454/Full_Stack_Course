import './Item.css';
function Item(props){
    const name = props.name;

    return(
        <div>
            <p className='item'>{name}</p>;
            {props.children}

        </div>
    )
    



}
export default Item;
