import { connect } from "react-redux";
import Game from "../components/Game";
import { loseActionCreater, setValueActionCreater, winActionCreater } from "../store/action_creators";

const mapStateToProps = state => {
    return {
        errors: state.game.errors,
        values: state.game.values,
        matrix: state.game.matrix.start
    }
}


const mapDispatchToProps = dispatch => {
    return {
        setValue(value,indexArr){
            const action = setValueActionCreater(value, indexArr)
            dispatch(action)
        },
        win(){
            const action = winActionCreater()
            dispatch(action)
        },
        lose() {
            const action = loseActionCreater()
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Game) 