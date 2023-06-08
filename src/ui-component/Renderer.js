const Renderer = ({ item }) => {

    const Specific = item;

    if(!item) return null;

    return (
        <Specific />
    )
}

export default Renderer