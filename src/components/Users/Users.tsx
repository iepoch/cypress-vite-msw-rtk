import { FC } from "react";
import { useGetUsersQuery } from "../../services/users/usersApiSlice";



export const Users: FC = () => {
  const { data = [] } = useGetUsersQuery()

    return (
    <>

    <div>
      {data.map((user) =>(
        
        <div key={user.id}>
          {user.lastName}, {user.firstName}
          <div>
            {user.email}
          </div>
        </div>

      ))}
    </div>
    </>)
}