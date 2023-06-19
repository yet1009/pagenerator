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
        text: '카테고리 추가',
        className: 'btn btn_add',
        type: 'button',
        onClick: () => {},
    }

    const sideMenu = useMemo(() => (
        (dynamicComp.list() || []).map((el, idx) => <div key={`item__${idx}`}>{el}</div>)
    ), [])

    const btnArr = [
        {
            text: '취소',
            className: 'btn btn_cancel',
            onClick: () => {},
            style: {
                padding: '4px 10px',
                color: "#f44336",
                fontWeight: 500,
            }
        },
        {
            text: '등록',
            className: 'btn btn_addition',
            onClick: () => {},
        }
    ];


    const btnArr2 = [
        {
            title: '삭제',
            className: 'btn btn_delete',
            onClick: () => {},
            style: {},
        },
        {
            text: '등록',
            className: 'btn btn_addition',
            onClick: () => {},
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


                {/* 카테고리 title */}
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

                <DivBox classN='newcol_box sub depth1'>
                    <Inputs {...addipt} />
                    <DivBox classN='btn_wrap'>
                        {
                            btnArr2.map((el,idx) => {
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