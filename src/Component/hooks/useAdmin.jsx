import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
const {user} = useAuth()
  
const email = user?.email

    const {data: admin = [], isLoading: Adminloading, refetch} = useQuery({
        queryKey: ['users',email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/users/email/${email}`);
            return res.json();
        }
    })

    return [admin, Adminloading, refetch]
}

export default useAdmin;