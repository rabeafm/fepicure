import { Dish, Resturant, ResturantGrid } from '../../types/Data';

const ResturantTable = ({ setContent, setId, data }: ResturantGrid) => {
  console.log(data);

  return (
    <table className="resturanttable">
      <thead>
        <tr>
          <th>Image</th>
          <th>Resturant Name</th>
          <th>Chef</th>
          <th>Dishes</th>
        </tr>
      </thead>
      <tbody>
        {data.map((dat: Resturant) => (
          <tr key={dat._id}>
            <td>
              <img style={{ width: '50px' }} src={dat.image} alt={dat.name} />
            </td>
            <td
              onClick={() => {
                setId(dat._id);
              }}
            >
              {dat.name}
            </td>
            <td
              onClick={() => {
                setId(dat.chef._id);
                setContent('chefs');
              }}
            >
              {dat.chef.name}
            </td>
            <td>
              {dat.dishes.map((dish: Dish) => (
                <h1
                  key={dish._id}
                  onClick={() => {
                    setId(dish._id);
                    setContent('dishes');
                  }}
                >
                  {dish.name}
                </h1>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResturantTable;
