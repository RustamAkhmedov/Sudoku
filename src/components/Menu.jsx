import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div className="wrap">
            <div className="sudoku"><h1 className="sudoku__text">Sudoku</h1></div>
            <NavLink to="/game"><button className="play">Play</button></NavLink>
        </div>
    );
}


export default Menu