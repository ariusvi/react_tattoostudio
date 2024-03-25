import './Header.css'

import { CustomLink } from '../CustomLink/CustomLink'
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    const passport = JSON.parse(localStorage.getItem("passport"));
    const logOut = () => {
        localStorage.removeItem("passport")
        navigate("/login")
    }
    return (

        <div className="headerDesign">
            <CustomLink title="Home" destination="/" />
            {passport?.token
                ? (
                    // si token es true, muestra un tipo de botones
                    <div className="menu">
                        <CustomLink title={passport?.decodificado?.first_name} destination={"/profile"} />
                        <div onClick={logOut}>
                            <CustomLink title={"Log-out"} destination={"/"} />
                        </div>
                    </div>
                )
                : (
                    // si token es false, muestra otro tipo de botones
                    <div className="menu">
                        <CustomLink title={"Login"} destination={"/login"} />
                        <CustomLink title={"Register"} destination={"/register"} />

                    </div>)
            }
            <CustomLink title="Services" destination="/facilities" />
            {/* <CustomLink title="Login" destination="/login" /> */}
        </div>
    );
}