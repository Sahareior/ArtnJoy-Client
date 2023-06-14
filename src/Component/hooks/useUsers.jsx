import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const token = localStorage.getItem('access-token');  

    const {data: users = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users',{
                headers: {
                    Authorization: `Bearer ${token}` // Replace `accessToken` with your actual token variable
                  }
            });
            return res.json();
        }
    })

    return [users, loading, refetch]
}

export default useUsers;