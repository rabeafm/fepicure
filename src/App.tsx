import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import getMe from './utils/getMe';
import Login from './components/Login';
import Main from './components/Main';
import './App.scss';

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [user, setUser] = useState();

  // fetch user based on cookie
  useEffect(() => {
    if (cookies.token !== undefined) {
      getMe(cookies.token)
        .then((res) => {
          res.success ? setUser(res.data) : removeCookie('token');
        })
        .catch(() => {
          removeCookie('token');
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      {user !== undefined ? (
        <Main
          user={user}
          setUser={setUser}
          cookies={cookies}
          removeCookie={removeCookie}
        />
      ) : (
        <Login setUser={setUser} setCookie={setCookie} />
      )}
    </div>
  );
};

export default App;
