import { useState, useEffect } from 'react';
import { tableProps } from '../types/Components';
import { Response } from '../types/Data';
import getData from '../utils/getData';

import ChefTable from './chefs/ChefTable';
import DishTable from './dishes/DishTable';
import ResturantTable from './resturants/ResturantTable';

const Table = ({ cookies, content, setContent, id, setId }: tableProps) => {
  const [response, setResponse] = useState<Response>();
  useEffect(() => {}, [response]);
  useEffect(() => {
    getData(content, id, cookies.token).then(setResponse);
    // eslint-disable-next-line
  }, [content]);

  return (
    <div className="Table">
      {response !== undefined &&
        (content === 'chefs' && response.msg === 'Show all chefs.' ? (
          <ChefTable
            setContent={setContent}
            setId={setId}
            data={response.data}
          />
        ) : content === 'rests' && response.msg === 'Show all resturants.' ? (
          <ResturantTable
            setContent={setContent}
            setId={setId}
            data={response.data}
          />
        ) : (
          content === 'dishes' &&
          response.msg === 'Show all dishes.' && (
            <DishTable
              setContent={setContent}
              setId={setId}
              data={response.data}
            />
          )
        ))}
    </div>
  );
};

export default Table;
