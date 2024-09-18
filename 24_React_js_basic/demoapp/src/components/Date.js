import './Date.css';

function Date(props){

    const day =props.day;
    const month =props.month;
    const year =props.year;

    return(<div className='date'>
        <span>{day}</span>
        <span>{month}</span>
        <span>{year}</span>
    </div>);
}
export default Date;