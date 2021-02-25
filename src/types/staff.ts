type startEnd = {
  start: string;
  end: string;
};

type WorkingHours = {
  [key: string]: startEnd[];
  monday: startEnd[];
  tuesday: startEnd[];
  wednesday: startEnd[];
  thursday: startEnd[];
  friday: startEnd[];
  saturday: startEnd[];
  sunday: startEnd[];
};

type Staff = {
  id: number;
  name: string;
  hours: WorkingHours;
}

export default Staff;
