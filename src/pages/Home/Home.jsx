import { Header } from '../../Common/Header/Header'
import './Home.css'
import homePhoto from '../../img/home_photo.jpg';
import { CustomButton } from '../../Common/CustomButton/CustomButton';
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className='title'>Old Ink</div>
            <div className='homeDesign'>
                <div><img src={homePhoto} alt="tattoo_oldink" /></div>
                <div className='text'>¡Bienvenido a Old Ink! <br></br>
                    Somos un equipo apasionado de artistas del tatuaje dedicados a convertir tus ideas en obras de arte permanentes. Con un enfoque en la calidad, la creatividad y la seguridad, estamos aquí para ayudarte a expresar tu individualidad a través de impresionantes tatuajes personalizados. Explora nuestra galería y déjanos ser parte de tu próxima aventura en el mundo del arte corporal. ¡Bienvenido a nuestra comunidad de autoexpresión!
                </div>
                <div className='homeButtons'>
                    <CustomButton
                        className={'CustomButtonDesign'}
                        title={'Servicios'}
                        onClick={() => navigate("/facilities")}
                    /></div>
                <div className='homeButtons'>
                    <CustomButton
                        className={'CustomButtonDesign'}
                        title={'Registrate'}
                        onClick={() => navigate("/register")}
                    /></div>
            </div>
        </>

    )
}