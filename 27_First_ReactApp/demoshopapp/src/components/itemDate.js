import "./itemDate.css";
function ItemDate(){
    const day =20;
    const month = "june";
    const year = 1998;
    return(
        <div className="mfg-Date">
            <span> {day} </span>
            <span> {month} </span>
            <span> {year} </span>
        </div>
     );
}

export default ItemDate;