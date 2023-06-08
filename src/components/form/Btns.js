const Btns = (props) => {
    let propObj = {};

    for(let i in props) {
        if(i !== 'title') propObj[i] = props[i]
    }

    return (
        <button {...propObj}>{props.title}</button>
    )
}

export default Btns

