import Game from "../components/Game";

const GameHOC = (props) => {
    return <Game errors={props.state.errors} values={props.state.values} matrix={props.state.matrix.start} dispach ={props.dispach}/>
}

export default GameHOC