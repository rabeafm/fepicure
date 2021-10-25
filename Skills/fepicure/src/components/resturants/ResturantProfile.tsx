import { Resturant } from '../../types/Data';

const ResturantProfile = (data: Resturant) => {
  console.log(data);

  return (
    <form className="resturantprofile">
      <img style={{ width: '50px' }} src={data.image} alt={data.name} />
      <input type="text" id="image" name="image" defaultValue={data.image} />
      <br />
      <br />
      <label htmlFor="name">Resturant Name:</label>
      <input type="text" id="name" name="name" defaultValue={data.name} />
      <br />
      <br />
      <label htmlFor="chef">Resturant Chef:</label>
      <textarea id="chef" name="chef" defaultValue={data.chef.name} />
      <br />
      <br />
      <label>Dishes:</label>
      <br />
      <br />
      {data.dishes.map((dish: any) => (
        <h1 key={dish._id}>{dish.name}</h1>
      ))}
    </form>
  );
};

export default ResturantProfile;
