import * as yup from 'yup';
import { tableValidationSchema } from 'validationSchema/tables';
import { teamMemberValidationSchema } from 'validationSchema/team-members';

export const companyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  table: yup.array().of(tableValidationSchema),
  team_member: yup.array().of(teamMemberValidationSchema),
});
