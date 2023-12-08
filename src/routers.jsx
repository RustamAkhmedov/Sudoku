import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import GameOver from "./components/GameOver";
import YouWin from "./components/YouWin";
import GameHOC from "./containers/GameHOC";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Menu />} /> 
            <Route path="/menu" element={<Menu />} /> 
            <Route path="/game" element={<GameHOC />} /> 
            <Route path="/gameover" element={<GameOver />} /> 
            <Route path="/win" element={<YouWin/>} /> 
        </Routes>
    );
}

export default Routers;
