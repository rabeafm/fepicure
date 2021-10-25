import { Cookie } from 'universal-cookie';

interface mainProps {
  user: user;
  setUser: Function;
  cookies: Cookie;
  removeCookie: Function;
}

interface user {
  _id: string;
  name: string;
  email: string;
  role: string;
  __v: number;
}

interface loginProps {
  setUser: Function;
  setCookie: Function;
}

interface navProps {
  user: user;
  setUser: Function;
  content: string;
  setContent: Function;
  cookies: Cookie;
  removeCookie: Function;
  id: string;
  setId: Function;
}

interface viewProps {
  cookies: Cookie;
  content: string;
  setContent: Function;
  id: string;
  setId: Function;
}

interface unitProps {
  cookies: Cookie;
  content: string;
  id: string;
}

interface tableProps {
  cookies: Cookie;
  content: string;
  setContent: Function;
  id: string;
  setId: Function;
}

export type {
  mainProps,
  loginProps,
  navProps,
  viewProps,
  unitProps,
  tableProps,
  user,
};
