const Inputs = (props) => {
    let propObj = {};

    for(let i in props) {
        if(i !== 'label') propObj[i] = props[i];
    }

    return (
        <div className='ipt_box'>
            {propObj?.label?.length > 0 && <label htmlFor={props.id}>{props.label}</label>}
            <input {...propObj} />
        </div>
    )
}

export default Inputs;