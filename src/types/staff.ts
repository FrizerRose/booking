import Break from './breaks';
import { WorkingHours } from './workingHours';

type Staff = {
  id: number;
  name: string;
  isPublic: boolean;
  hours: WorkingHours;
  breaks: Break[];
}

export default Staff;
