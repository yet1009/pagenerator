const DivBox = ({ classN='box', children }) => {

    return (
        <div className={classN}>
            {children}
        </div>
    )
}

export default DivBox;