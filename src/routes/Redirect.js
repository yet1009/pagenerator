import { Navigate } from 'react-router-dom';

const Redirection = ({ props }) => {
    console.log(...props)
    return <Navigate {...props} ></Navigate>
}

export default Redirection;