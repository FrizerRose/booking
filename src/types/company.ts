import DaysOff from './breaks';
import CompanyPreferences from './companyPreferences';
import Service from './service';
import Staff from './staff';

type Company = {
  id: number;
  isPublic: boolean;
  name: string;
  contactEmail: string;
  bookingPageSlug: string;
  services: Service[];
  staff: Staff[];
  preferences: CompanyPreferences;
  image: { link: string };
  about: string;
  city: string;
  streetName: string;
  phoneNumber: string;
  daysOff: DaysOff[];
}

export default Company;
