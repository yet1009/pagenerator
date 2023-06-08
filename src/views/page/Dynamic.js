import {lazy, useEffect, useState} from "react";

const Dynamic = ({ path }) => {

    console.log(path)

    const [component, setComponents] = useState(null);

    useEffect(() => {

        const makeComponent = async () => {
            const { default: Component } = await import(path)

            setComponents(<Component />)
        }

        makeComponent()
    }, [])

    return <>{component}</>

}

export default Dynamic