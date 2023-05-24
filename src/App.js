import { BrowserRouter as Router } from "react-router-dom";
import RouteIdentifier from "./routes/RouteIdentifier";

import './scss/styles.scss';


const App = () => {

    return (
        <Router>
            <RouteIdentifier />
        </Router>
    )
}

export default App