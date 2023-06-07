import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  duration: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
});
