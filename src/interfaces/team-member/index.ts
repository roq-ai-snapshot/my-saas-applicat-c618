import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';

export interface TeamMemberInterface {
  id?: string;
  user_id: string;
  company_id: string;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}
