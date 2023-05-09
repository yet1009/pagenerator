import Btns from "../../components/form/Btns";
import DivBox from "../../components/wrap/DivBox";

const btnProps = {
    title: 'Add Column',
    className: 'btn btn_add',
    onClick: (e) => {
        // console.log(e.target)
    },
}

const ColumnAdd = () => {

    return (
        <DivBox classN='addBox'>
            <Btns {...btnProps}></Btns>
        </DivBox>
    )
}

export default ColumnAdd;