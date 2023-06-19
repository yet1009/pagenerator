const Btns = (props) => {
    let propObj = {};

    // console.log(props)
    for(let i in props) {
        if(i !== 'text') propObj[i] = props[i]
    }

    return (
        <div className='btn_box'>
            <button {...propObj}>{props.text}</button>
        </div>
    )
}

export default Btns

