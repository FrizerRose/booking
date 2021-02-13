import Service from '@/types/service';
import Staff from '@/types/staff';

export interface State {
  currentStep: number;
  selectedService: Service | null;
  selectedStaff: Staff | null;
  selectedDateTime: string | null;
  personalDetails: unknown;
}

const state: State = {
  currentStep: 1,
  selectedService: null,
  selectedStaff: null,
  selectedDateTime: null,
  personalDetails: null,
};

export default state;
