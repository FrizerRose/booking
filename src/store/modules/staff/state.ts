import Staff from '@/types/staff';

export interface State {
  staff: Staff | null;
}

const state: State = {
  staff: null,
};

export default state;
