import Appointment from '@/types/appointment';
import Service from '@/types/service';
import Staff from '@/types/staff';

export interface State {
  currentStep: number;
  selectedService: Service | null;
  selectedStaff: Staff | null;
  selectedDateTime: unknown;
  personalDetails: unknown;
  reservedAppointments: Appointment[];
}

const state: State = {
  currentStep: 1,
  selectedService: null,
  selectedStaff: null,
  selectedDateTime: null,
  personalDetails: null,
  reservedAppointments: [],
};

export default state;
