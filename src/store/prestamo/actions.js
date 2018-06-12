import { createAction } from 'redux-actions';

import { PRESTAMO } from 'store/action-types';
import { obtenerPrestamo } from './api';

export const submit = createAction(PRESTAMO.SUBMIT, () => obtenerPrestamo({}));
