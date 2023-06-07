import { UserInterface } from 'interfaces/user';
import { TableInterface } from 'interfaces/table';

export interface BookingInterface {
  id?: string;
  user_id: string;
  table_id: string;
  date_time: Date;
  duration: number;

  user?: UserInterface;
  table?: TableInterface;
  _count?: {};
}
