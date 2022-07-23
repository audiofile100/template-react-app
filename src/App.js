import {Routes, Route} from "react-router-dom";
import {Landing} from "./component/landing/Landing";
import {Register} from "./component/register/Register";
import {Login} from "./component/login/Login";

export const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Landing />} >
                <Route path={"home"} element={<Landing />} />
                <Route path={"register"} element={<Register />} />
                <Route path={"login"} element={<Login />} />
            </Route>
        </Routes>
    )
}