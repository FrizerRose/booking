import Break from './breaks';
import { WorkingHours } from './workingHours';

type Staff = {
  id: number;
  name: string;
  hours: WorkingHours;
  breaks: Break[];
}

export default Staff;
