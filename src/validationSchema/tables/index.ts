import * as yup from 'yup';
import { bookingValidationSchema } from 'validationSchema/bookings';

export const tableValidationSchema = yup.object().shape({
  capacity: yup.number().integer().required(),
  status: yup.string().required(),
  company_id: yup.string().nullable().required(),
  booking: yup.array().of(bookingValidationSchema),
});
