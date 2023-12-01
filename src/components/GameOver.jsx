import { NavLink } from "react-router-dom";


const GameOver = () => {
    return (
        <div className="wrap">
            <h1>Game Over</h1>
            <NavLink to="/menu"><button className="play">Menu</button></NavLink>
        </div>
    );
}


export default GameOver