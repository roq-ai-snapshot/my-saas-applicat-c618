import { TeamMemberInterface } from 'interfaces/team_member';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;

  team_member: TeamMemberInterface[];
}
