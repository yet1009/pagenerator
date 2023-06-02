import {authCheck, componentStore} from "../../store";
import {observer} from "mobx-react";
import { useNavigate } from "react-router-dom";
import Redirection, { Redirect } from "../../routes/Redirect";
import {lazy, useEffect, useState} from "react";
import Loadable from "../../ui-component/Loadable";




const Home = observer(() => {

    let LoggedIn = authCheck.isLogin;
    let navigate = useNavigate();
    const [search, setSearch] = useState('')
    // let path = '../../components/form/Inputs';

    const _iptHandler = (e) => {
        setSearch(e.target.value);
    }

    const _checkHandler = (e) => {

        if(!search.length) return;
        componentStore.compCheckHandler(search)

    }

    useEffect(() => {



    }, [search]);



    // useEffect(() => {
    //     if(!LoggedIn) {
    //         navigate('/dashboard');
    //     }
    // }, [])




    return (
        <div className='layout'>
            <div className='searchBox'>
                <input
                    value={search}
                    onChange={(e) => {
                        _iptHandler(e)
                    }}
                />
                <button
                    onClick={(e) => {
                        _checkHandler(e)
                    }}
                >검색</button>
            </div>
            {
                // componentStore.flag &&
            }
        </div>
    );
})

export default Home;