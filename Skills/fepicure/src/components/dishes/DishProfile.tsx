import { Dish } from '../../types/Data';

const DishProfile = (data: Dish) => {
  console.log(data);

  return (
    <form className="dishprofile">
      <label htmlFor="name">Dish Name:</label>
      <input type="text" id="name" name="name" defaultValue={data.name} />
      <br />
      <br />
      <label htmlFor="price">Dish Price:</label>
      <textarea id="price" name="price" defaultValue={data.price} />
      <br />
      <br />
      <label htmlFor="rest">Resturant:</label>
      <textarea id="rest" name="rest" defaultValue={data.resturant.name} />
      <br />
      <br />
      <label>Ingredients:</label>
      <br />
      <br />
      {data.ingredients.map((ing: string, i: number) => (
        <h1 key={i}>{ing}</h1>
      ))}
      <br />
      <br />
      <label>Tags:</label>
      <br />
      <br />
      {data.tags.map((tag: string, i: number) => (
        <h1 key={i}>{tag}</h1>
      ))}
    </form>
  );
};

export default DishProfile;
