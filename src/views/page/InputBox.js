import DivBox from "../../components/wrap/DivBox";
import Inputs from "../../components/form/Inputs";
import Btns from "../../components/form/Btns";




const InputBox = () => {

    const iptProp = {
        placeholder: 'Column Name',
        value: '',
        onChange: (e) => {
            // console.log(e.target.value)
        }
    }

    const btnProp = [
        {
            title: 'Cancel',
            className: 'btn btn_cancel',
            onClick: () => {}
        },
        {
            title: 'Add',
            className: 'btn btn_add',
            onClick: () => {}
        }
    ]

    // <DivBox classN='btn_box'>
    //     <Btns></Btns>
    // </DivBox>
    // <DivBox classN='btn_box'>
    //     <Btns></Btns>
    // </DivBox>


    return (
        <DivBox classN='add_column'>
            <DivBox classN='form_box'>
                <Inputs {...iptProp} />
            </DivBox>
            <DivBox classN='btn_wrap'>
                {
                    btnProp.map((el, idx) => {
                        return (
                            <DivBox classN='btn_box' key={`btn${idx}`}>
                                <Btns {...el} />
                            </DivBox>
                        )
                    })
                }
            </DivBox>
        </DivBox>
    )
}

export default InputBox;