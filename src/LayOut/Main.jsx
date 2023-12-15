import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/NavBar/NavBar';
import Footer from '../Components/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='border pt-24 min-h-[calc(100vh-68px)]'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Main;