const Inputs = (props) => {
    // console.log(props)

    return (
        <div className='ipt_box'>
            {props.label ? <label htmlFor={props.id}>{props.label}</label> : null}
            <input {...props} />
        </div>
    )
}

export default Inputs;