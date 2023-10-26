import React, { useEffect, useState } from "react";

const List = () => {

    const [user, setUser] = useState({hits: []})

    useEffect(()=> {
        const fetchData = async () =>{
            const {data} = await axios(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUser({ hits: data });
        };
        fetchData();
    }, [setUser]);

  return (
    <div>
      <ul>
        {user.hits &&
          user.hits.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default List