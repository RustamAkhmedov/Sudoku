import { useState, useEffect } from "react";
import { setValueActionCreater, loseActionCreater, winActionCreater} from "../store/action_creators";
import { useNavigate } from "react-router-dom";


const Game = props => {
    const [indexArr, changeIndexArr] = useState([0, 0])
    const navigate = useNavigate()
    const iswin = () => {
        for( const arr of props.matrix) {
            if (arr.includes(0)) {
                return 
            }
        }
        props.dispach(winActionCreater())
        navigate("/win")
    }
    const setValue = event => {
        props.dispach(setValueActionCreater(event.target.textContent, indexArr))
    }
    const islose = () => {
        if (props.errors<3) {
            return
        }
        props.dispach(loseActionCreater())
        navigate("/gameover")
    }
    useEffect(()=> {
        iswin()
        islose()
    }, [props.matrix, props.errors]) 
    const valuesList = props.values.map(value => {
        return (
            <li key={value} className="values__li"><button className="number-button" onClick={setValue}>{value}</button></li>
        )
    })
    const matrix = props.matrix.map((tr, index) => {
        return (
            <tr key={index}>
                {tr.map((td, tdIndex) => {
                    return (
                        <td key={tdIndex} className={(index === indexArr[0] && tdIndex === indexArr[1]) ? "active-field" : "field"} onClick={() => { changeIndexArr([index, tdIndex]) }}>
                            {td || ""}
                        </td>
                    )
                })}
            </tr>
        )
    })
    return (
        <div className="wrap">
            <table className="game__table">
                <tbody>
                    {matrix}
                </tbody>
            </table>
            <ul className="values">
                {valuesList}
            </ul>
            <div>
                errors: {props.errors}/3
            </div>
        </div>
    );
}


export default Game