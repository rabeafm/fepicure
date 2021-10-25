import { useState } from 'react';
import { mainProps } from '../types/Components';
import Navbar from './Navbar';
import View from './View';

const Main = ({ user, setUser, cookies, removeCookie }: mainProps) => {
  const [content, setContent] = useState('chefs');
  const [id, setId] = useState('');
  return (
    <div className="Main">
      <Navbar
        user={user}
        setUser={setUser}
        content={content}
        setContent={setContent}
        cookies={cookies}
        removeCookie={removeCookie}
        id={id}
        setId={setId}
      />
      <View
        cookies={cookies}
        content={content}
        setContent={setContent}
        id={id}
        setId={setId}
      />
    </div>
  );
};

export default Main;
