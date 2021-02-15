import Appointment from '@/types/appointment';
import Customer from '@/types/customer';
import Service from '@/types/service';
import Staff from '@/types/staff';

export interface State {
  currentStep: number;
  selectedService: Service | null;
  selectedStaff: Staff | null;
  selectedDateTime: unknown;
  selectedCustomer: Customer | null;
  reservedAppointments: Appointment[];
}

const state: State = {
  currentStep: 1,
  selectedService: null,
  selectedStaff: null,
  selectedDateTime: null,
  selectedCustomer: null,
  reservedAppointments: [],
};

export default state;
