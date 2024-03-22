import './Header.css'

import { CustomLink } from '../CustomLink/CustomLink'

export const Header = () => {
    const token = true;
    return (

        <div className='headerDesign'>
            <CustomLink title="Home" destination="/" />
            {
                token ? (
                    <div>
                        <CustomLink title="name"    destination="/profile" />
                        <CustomLink title="Log-out" destination="/" />
                    </div>
                ) 
                : (
                    <div>
                        <CustomLink title="Login"   destination="/login" />
                        <CustomLink title="Register"   destination="/register" />
                </div>)
            }
            <CustomLink title="Services" destination="/facilities" />
            <CustomLink title="Login" destination="/login" />
        </div>

    )
}