const countValue = document.querySelector('#value');

const increment =()=>{

    // get the value form ui
    let value = parseInt(countValue.innerText);

    // update the val;ue from ui
    value = value+1;

    // set the value from ui
    countValue.innerText =value;

};

const decrement = ()=>{

    // get the value form ui
    let value = parseInt(countValue.innerText);

    // update the val;ue from ui
    value = value-1;

    // set the value from ui
    countValue.innerText =value;

};



