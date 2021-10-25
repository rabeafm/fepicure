import { loginProps } from '../types/Components';
import postLogin from '../utils/postLogin';
import { Response } from '../types/Data';

const Login = ({ setUser, setCookie }: loginProps) => {
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const body: Response = await postLogin(
      e.target.email.value,
      e.target.password.value
    );
    if (body.success) {
      let expireDate = new Date();
      expireDate.setTime(expireDate.getTime() + 600 * 60 * 1000);
      setCookie('token', body.data.token, {
        path: '/',
        expires: expireDate,
      });
      setUser(body.data.user);
    } else {
      const invalidCred: HTMLElement | null =
        document.getElementById('invalid');
      if (invalidCred) invalidCred.style.display = 'block';
    }
  };
  return (
    <div className="Login">
      <h2>Please enter your email and password:</h2>
      <form onSubmit={handleLogin}>
        <div className="loginform">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <input type="submit" value="Login" />
        </div>
      </form>
      <h2 id="invalid" style={{ display: 'none' }}>
        * Invalid Credentials
      </h2>
    </div>
  );
};

export default Login;
