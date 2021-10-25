import { Dish, DishGrid } from '../../types/Data';

const DishTable = ({ setContent, setId, data }: DishGrid) => {
  console.log(data);

  return (
    <table className="dishtable">
      <thead>
        <tr>
          <th>Dish Name</th>
          <th>Dish Price</th>
          <th>Resturant</th>
          <th>Ingredients</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        {data.map((dat: Dish) => (
          <tr key={dat._id}>
            <td
              onClick={() => {
                setId(dat._id);
              }}
            >
              {dat.name}
            </td>
            <td>{dat.price}</td>
            <td
              onClick={() => {
                setId(dat.resturant._id);
                setContent('rests');
              }}
            >
              {dat.resturant.name}
            </td>
            <td>
              {dat.ingredients.map((ing: string, i: number) => (
                <h1 key={i}>{ing}</h1>
              ))}
            </td>
            <td>
              {dat.tags.map((tag: string, i: number) => (
                <h1 key={i}>{tag}</h1>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DishTable;
