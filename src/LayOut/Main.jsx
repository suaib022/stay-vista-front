import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/NavBar/NavBar';
import Footer from '../Components/Shared/Footer/Footer';
import UseAuth from '../Hooks/UseAuth';
import Loader from '../Components/Loader/Loader';

const Main = () => {

    const {loading} = UseAuth();

    if(loading) return <Loader />
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