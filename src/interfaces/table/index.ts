import { BookingInterface } from 'interfaces/booking';
import { CompanyInterface } from 'interfaces/company';

export interface TableInterface {
  id?: string;
  company_id: string;
  capacity: number;
  status: string;
  booking?: BookingInterface[];
  company?: CompanyInterface;
  _count?: {
    booking?: number;
  };
}
