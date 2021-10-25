import { useState, useEffect } from 'react';
import { unitProps } from '../types/Components';
import { Response } from '../types/Data';
import getData from '../utils/getData';

import ChefProfile from './chefs/ChefProfile';
import DishProfile from './dishes/DishProfile';
import ResturantProfile from './resturants/ResturantProfile';

const Unit = ({ cookies, content, id }: unitProps) => {
  const [response, setResponse] = useState<Response>();
  useEffect(() => {}, [response]);
  useEffect(() => {
    getData(content, id, cookies.token).then(setResponse);
    // eslint-disable-next-line
  }, [content, id]);

  return (
    <div className="Unit">
      {response !== undefined &&
        (content === 'chefs' && response.msg === 'Show chef.' ? (
          <ChefProfile {...response.data} />
        ) : content === 'rests' && response.msg === 'Show resturant.' ? (
          <ResturantProfile {...response.data} />
        ) : (
          content === 'dishes' &&
          response.msg === 'Show dish.' && <DishProfile {...response.data} />
        ))}
    </div>
  );
};

export default Unit;
