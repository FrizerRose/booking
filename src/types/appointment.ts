import Company from './company';
import Customer from './customer';
import Service from './service';
import Staff from './staff';

type Appointment = {
  id: number;
  datetime: string;
  message: string;
  company: Company;
  staff: Staff;
  service: Service;
  customer: Customer;
}

export default Appointment;
