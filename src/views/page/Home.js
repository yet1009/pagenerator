import {authCheck, componentStore, dynamicComp} from "../../store";
import {observer} from "mobx-react";
import Redirection, { Redirect } from "../../routes/Redirect";
import {lazy, useEffect, useMemo, useRef, useState} from "react";
import Loadable from "../../ui-component/Loadable";

import Inputs from "../../components/form/Inputs";
import Btns from "../../components/form/Btns";
import DivBox from "../../components/wrap/DivBox";
import {Input} from "@mui/material";

import del from '../../assets/imgs/icon_delete.png'



// const Basic = Loadable(lazy(() => import('../unit/Basic')))


const Home = observer(({ handleRef }) => {

    const [search, setSearch] = useState('')
    const [val, setVal] = useState('')
    const [bool, setBool] = useState(false);
    const [add, setAdd] = useState('');


    const ipts = {
        label: '',
        className: 'basic',
        value: search,
        onChange: (e) => {
            setSearch(e.target.value)
        },
    }

    const btns = {
        style: {
            padding: '0 10px',
            minHeight: '20px',
            backgroundImage: `url(${del})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: '100%'
        },
        title: '삭제',
        className: 'btn btn_del',
        onClick: (e) => {
        },
    }


    const addBtn = {
        text: 'Add Column',
        className: 'btn btn_add',
        type: 'button',
        onClick: () => {},
    }

    const sideMenu = useMemo(() => (
        (dynamicComp.list() || []).map((el, idx) => <div key={`item__${idx}`}>{el}</div>)
    ), [])

    const btnArr = [
        {
            text: 'Cancel',
            className: 'btn btn_cancel',
            onClick: () => {},
            style: {
                padding: '4px 10px',
                color: "#f44336",
                fontWeight: 500,
            }
        },
        {
            text: 'Add',
            className: 'btn btn_addition',
            onClick: () => {},
            style: {
                padding: '4px 10px',
                transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                color: "#fff",
                backgroundColor: "#2196f3",
                boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
                fontWeight: 500,
                borderRadius: "4px",
            }
        }
    ]

    const addipt = {
        className: 'basic',
        value: add,
        onChange: (e) => {
            setAdd(e.target.value)
        },
        placeholder: 'Add Column',
    }


    return (
        <div className='layout'>
            <DivBox classN='wrap draggable'>
                <DivBox classN='col_box'>
                    <Inputs {...ipts} />
                    <Btns {...btns} />
                </DivBox>
            </DivBox>

            <DivBox classN='wrap empty'>
                <Btns {...addBtn} />
                <DivBox classN='newcol_box'>
                    <Inputs {...addipt} />
                    <DivBox classN='btn_wrap'>
                        {
                            btnArr.map((el,idx) => {
                                return (
                                    <Btns {...el} key={`btn__${idx}`} />
                                )
                            })
                        }
                    </DivBox>
                </DivBox>
            </DivBox>

        </div>
    );
})

export default Home;