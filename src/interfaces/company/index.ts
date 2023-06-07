import { TableInterface } from 'interfaces/table';
import { TeamMemberInterface } from 'interfaces/team-member';
import { UserInterface } from 'interfaces/user';

export interface CompanyInterface {
  id?: string;
  name: string;
  user_id: string;
  table?: TableInterface[];
  team_member?: TeamMemberInterface[];
  user?: UserInterface;
  _count?: {
    table?: number;
    team_member?: number;
  };
}
