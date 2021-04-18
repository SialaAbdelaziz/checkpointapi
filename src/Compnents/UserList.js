import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [User, setUser] = useState([])
    useEffect(() => {
      const FetchData =  async () =>{
          try{
              const {data} =await axios.get("https://jsonplaceholder.typicode.com/users")
              setUser(data)
          }
          catch (error) {
              console.log(error)
          }
      }
      FetchData()
    }, [])
    return (
        <div>
            {User.map(
                el => <div><ol>
                    <li>{el.name}</li>
                    <li>{el.phone}</li>
                </ol></div>
            )}
        </div>
    )
}

export default UserList
