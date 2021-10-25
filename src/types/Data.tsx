interface Response {
  success: boolean;
  msg: string;
  data: any;
}

interface Dish {
  _id: string;
  name: string;
  price: number;
  ingredients: [string];
  tags: [string];
  resturant: Resturant;
}

interface DishGrid {
  setContent: Function;
  setId: Function;
  data: [Dish];
}

interface Resturant {
  _id: string;
  name: string;
  image: string;
  chef: Chef;
  dishes: [Dish];
}

interface ResturantGrid {
  setContent: Function;
  setId: Function;
  data: [Resturant];
}

interface Chef {
  _id: string;
  name: string;
  image: string;
  descr: string;
  rests: [Resturant];
}

interface ChefGrid {
  setContent: Function;
  setId: Function;
  data: [Chef];
}

export type {
  Chef,
  Dish,
  Resturant,
  Response,
  ChefGrid,
  DishGrid,
  ResturantGrid,
};
