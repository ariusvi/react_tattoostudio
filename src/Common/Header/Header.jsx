import './Header.css'

import { CustomLink } from '../CustomLink/CustomLink'

export const Header = () => {
    const token = true;
    const logOut = () => {
        // funcion para deslogear
    }
    return (

        <div className="headerDesign">
            <CustomLink title="Home" destination="/" />
            {token 
                ? ( 
                    // si token es true, muestra un tipo de botones
                    <div className="menu">
                        <CustomLink title="name"    destination="/profile" />
                        <CustomLink title="Log-out" destination="/" />
                    </div>
                ) 
                : (
                    // si token es false, muestra otro tipo de botones
                    <div className="menu">
                        <CustomLink title="Login"   destination="/login" />
                        <CustomLink title="Register"   destination="/register" />
                </div>)
            }
            <CustomLink title="Services" destination="/facilities" />
            {/* <CustomLink title="Login" destination="/login" /> */}
        </div>
    );
}