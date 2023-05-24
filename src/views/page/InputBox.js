import Btns from "../../components/form/Btns";
import Box from "../../components/wrap/DivBox";


const InputBox = () => {

    const iptProp = {
        placeholder: 'Column Name',
        value: '',
        onChange: (e) => {

        }
    }

    const btnProp = [
        {
            title: 'Cancel',
            className: 'btn btn_cancel',
            onClick: () => {
            }
        },
        {
            title: 'Add',
            className: 'btn btn_add',
            onClick: () => {
            }
        }
    ]

    const prop = {
        title: 'Add Column',
        className: 'btn btn_add',
        onClick: () => {
        }
    }


    return (
        <Box classN='add_column'>
            <Box classN='btn_box'>
                <Btns {...prop}></Btns>
            </Box>
        </Box>
    )
}

export default InputBox;