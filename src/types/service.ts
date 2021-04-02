import Staff from './staff';

type Service = {
  id: number;
  name: string;
  duration: number;
  price: number;
  sex: string;
  staff?: Staff[];
}

export default Service;
