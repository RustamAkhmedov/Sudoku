import { NavLink } from "react-router-dom";

const YouWin = () => {
    return (
        <div className="wrap">
            <h1>You Win</h1>
            <NavLink to="/menu"><button className="play">Menu</button></NavLink>
        </div>
    );
}


export default YouWin