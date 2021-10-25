export default async function getMe(token: string) {
  try {
    const result = await fetch('http://localhost:4001/api/admin/auth/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
    const body = await result.json();
    return body;
  } catch (err) {
    console.log(err);
  }
}
