import UseAuth from '../Hooks/UseAuth';
import Loader from '../Components/Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = UseAuth();
    const location = useLocation();

    if(loading) return <Loader />

    if(user) return children;

    return <Navigate to= '/logIn' state={{from: location}} replace />
};

export default PrivateRoutes;