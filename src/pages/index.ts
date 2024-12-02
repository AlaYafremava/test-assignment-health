import { lazy } from 'react';

export const ErrorPage = lazy(() => import('./Error/Error.page'));
export const DoctorsPage = lazy(() => import('./Doctors/Doctors.page'));
export const NursesPage = lazy(() => import('./Nurses/Nurses.page'));
