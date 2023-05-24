const Box = ({ classN='box', children }) => {

    return (
        <div className={classN}>
            {children}
        </div>
    )
}

export default Box;