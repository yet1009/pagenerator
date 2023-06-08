const Inputs = (props) => {
    // console.log(props)

    return (
        <>
            {props.label ? <label htmlFor={props.id}>{props.label}</label> : null}
            <input {...props} />
        </>
    )
}

export default Inputs;