export default async function getData(
  content: string,
  id: string,
  token: string
) {
  try {
    const result = await fetch(
      `http://localhost:4001/api/admin/v1/${content}/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );
    const body = await result.json();
    return body;
  } catch (err) {
    console.log(err);
  }
}
