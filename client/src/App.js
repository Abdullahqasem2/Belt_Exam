import { useEffect, useState } from 'react';
import './App.css';
import Signin from './components/Signin';
import Main from './components/usage/Main'
import { auth } from './firebase';
import React from 'react';

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth.uid,
        email: userAuth.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])
  return (
    <div className="App">
      {user ? <Main /> : <Signin />}

    </div>
  );
}

export default App;
