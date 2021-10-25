import { Chef, ChefGrid, Resturant } from '../../types/Data';

const ChefTable = ({ setContent, setId, data }: ChefGrid) => {
  return (
    <table className="cheftable">
      <thead>
        <tr>
          <th>Image</th>
          <th>Chef name</th>
          <th>Description</th>
          <th>Resturants</th>
        </tr>
      </thead>
      <tbody>
        {data.map((dat: Chef) => (
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
            <td>{dat.descr}</td>
            <td>
              {dat.rests.map((rest: Resturant) => (
                <h1
                  key={rest._id}
                  onClick={() => {
                    setId(rest._id);
                    setContent('rests');
                  }}
                >
                  {rest.name}
                </h1>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ChefTable;
