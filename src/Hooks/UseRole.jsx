import UseAuth from "./UseAuth";
import { getRole } from "../API/Auth";
import { useQuery } from "@tanstack/react-query";

const UseRole = () => {

    const { user, loading } = UseAuth();

    const {data: role, isLoading} = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: ['role'],
        queryFn: async () => await getRole(user?.email)
    })

    return [role, isLoading]
};

export default UseRole;