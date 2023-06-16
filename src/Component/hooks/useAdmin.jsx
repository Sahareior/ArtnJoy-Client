import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
const {user} = useAuth()
const token = localStorage.getItem('access-token');  
  
const email = user?.email

    const {data: admin = [], isLoading: Adminloading, refetch} = useQuery({
        queryKey: ['users',email],
        queryFn: async() => {
            const res = await fetch(`https://assignment12-blue.vercel.app/users/email/${email}`,{
                headers: {
                    Authorization: `Bearer ${token}` // Replace `accessToken` with your actual token variable
                  }
            });
            return res.json();
        }
    })

    return [admin, Adminloading, refetch]
}

export default useAdmin;