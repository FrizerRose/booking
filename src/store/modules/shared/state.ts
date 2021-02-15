import Appointment from '@/types/appointment';
import Company from '@/types/company';
import Customer from '@/types/customer';
import Service from '@/types/service';
import Staff from '@/types/staff';

export interface State {
  currentStep: number;
  selectedCompany: Company | null;
  selectedService: Service | null;
  selectedStaff: Staff | null;
  selectedDateTime: {date: string; time: string};
  selectedCustomer: Customer | null;
  selectedNotice: string;
  reservedAppointments: Appointment[];
  createdAppointment: Appointment | null;
}

const state: State = {
  currentStep: 1,
  selectedCompany: null,
  selectedService: null,
  selectedStaff: null,
  selectedDateTime: { date: '', time: '' },
  selectedCustomer: null,
  selectedNotice: '',
  reservedAppointments: [],
  createdAppointment: null,
};

export default state;
