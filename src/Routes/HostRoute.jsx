
import UseRole from '../Hooks/UseRole';
import { Navigate } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';

const HostRoute = ({children}) => {
    
    const [role, isLoading] = UseRole();
    console.log(role);
    console.log(isLoading);

    if(isLoading) return <Loader />;
    if(role === 'host') return children;

    return <Navigate to='/dashboard' replace='true' />
};

export default HostRoute;
