import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [user, setUser] = useState('default user')

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   },5000)
  // },[loading])

  useEffect(() => {
    fetch(url)
        .then((resp) => resp.json())
        .then((user) => {
          const {login} = user
          setUser(login)
          setLoading(false)
        })
        .catch((error) => console.log(error))

  },[])

  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>Something is wrong...</h2>
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
