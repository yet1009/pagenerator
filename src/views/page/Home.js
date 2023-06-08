import {authCheck, componentStore, dynamicComp} from "../../store";
import {observer} from "mobx-react";
import Redirection, { Redirect } from "../../routes/Redirect";
import {lazy, useEffect, useMemo, useRef, useState} from "react";
import Loadable from "../../ui-component/Loadable";

import Inputs from "../../components/form/Inputs";
import Btns from "../../components/form/Btns";
import Renderer from "../../ui-component/Renderer";
import {toJS} from "mobx";


// const Basic = Loadable(lazy(() => import('../unit/Basic')))


const Home = observer(({ handleRef }) => {

    const [search, setSearch] = useState('')
    const [val, setVal] = useState('')
    const [bool, setBool] = useState(false);


    const ipts = {
        id: 'search',
        label: '',
        value: search,
        onChange: (e) => {
            setSearch(e.target.value)
        },
    }

    const btns = {
        title: '검색',
        onClick: (e) => {
            setBool(true)
            setVal(search)
            setSearch('')
        },
    }

    // const _checkHandler = (e) => {
    //     if(!search.length) return;
    //     componentStore.compCheckHandler(search)
    // }


    const sideMenu = useMemo(() => (
        (dynamicComp.list() || []).map((el, idx) => <div key={`item__${idx}`}>{el}</div>)
    ), [])


    return (
        <div className='layout'>
            <Inputs {...ipts} />
            <Btns {...btns} />
            {bool && <Renderer item={dynamicComp.components[val]}/>}
            {sideMenu}
        </div>
    );
})

export default Home;