import DaysOff from './breaks';
import CompanyPreferences from './companyPreferences';
import Service from './service';
import Staff from './staff';

type Company = {
  id: number;
  isPublic: boolean;
  name: string;
  bookingPageSlug: string;
  services: Service[];
  staff: Staff[];
  preferences: CompanyPreferences;
  image: { link: string };
  about: string;
  city: string;
  streetName: string;
  daysOff: DaysOff[];
}

export default Company;
