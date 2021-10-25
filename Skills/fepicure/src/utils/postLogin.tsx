const postLogin = async (email: string, password: string) => {
  try {
    const result = await fetch('http://localhost:4001/api/admin/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const body = await result.json();
    return body;
  } catch (err) {
    console.log(err);
  }
};

export default postLogin;
