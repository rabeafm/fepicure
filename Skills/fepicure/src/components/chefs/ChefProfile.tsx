import { Chef } from '../../types/Data';

const ChefProfile = (data: Chef) => {
  console.log(data);
  return (
    <form className="chefprofile">
      <img style={{ width: '50px' }} src={data.image} alt={data.name} />
      <input type="text" id="image" name="image" defaultValue={data.image} />
      <br />
      <br />
      <label htmlFor="name">Chef Name:</label>
      <input type="text" id="name" name="name" defaultValue={data.name} />
      <br />
      <br />
      <label htmlFor="descr">Description:</label>
      <textarea id="descr" name="descr" defaultValue={data.descr} />
      <br />
      <br />
      <label>Resturants:</label>
      <br />
      <br />
      {data.rests.map((rest: any) => (
        <h1 key={rest._id}>{rest.name}</h1>
      ))}
    </form>
  );
};

export default ChefProfile;
