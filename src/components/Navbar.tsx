import { navProps } from '../types/Components';

const Navbar = ({
  user,
  setUser,
  content,
  setContent,
  cookies,
  removeCookie,
  id,
  setId,
}: navProps) => {
  return (
    <div className="Navbar">
      <input
        type="button"
        value="Logout"
        onClick={() => {
          setUser(undefined);
          removeCookie('token');
        }}
      />
      <input
        type="button"
        value="Chefs"
        onClick={() => {
          setContent('chefs');
          setId('');
        }}
      />
      <input
        type="button"
        value="Resturants"
        onClick={() => {
          setContent('rests');
          setId('');
        }}
      />
      <input
        type="button"
        value="Dishes"
        onClick={() => {
          setContent('dishes');
          setId('');
        }}
      />
    </div>
  );
};

export default Navbar;
