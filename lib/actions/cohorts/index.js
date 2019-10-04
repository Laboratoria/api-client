import { laboratoriaAPIAction } from '../helpers';

export const getCohort = ({ slug, ...rest }) => laboratoriaAPIAction({
  type: 'COHORT',
  url: `/cohorts/${slug}`,
  method: 'GET',
  key: `cohorts/${slug}`,
  ...rest,
});
