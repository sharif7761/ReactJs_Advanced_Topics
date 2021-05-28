import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    let users = await response.json()
    users = users.slice(0,5)
    setUsers(users)
  }
  useEffect(() => {
    getUsers()
  },[])

  return (
      <>
        <h3>Github users</h3>
        <ul className='users'>

        {
          users.map((user) => {
            const {id, login, images,avatar_url, url ,html_url} = user
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url} target='_blank'>profile</a>
                </div>
              </li>
            )
          })
        }
        </ul>
      </>
  );
};

export default UseEffectFetchData;
