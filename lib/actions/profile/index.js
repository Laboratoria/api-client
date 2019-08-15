import { laboratoriaAPIAction } from '../helpers';

export const getProfileComments = ({ user, ...rest }) => laboratoriaAPIAction({
  type: 'PROFILE_COMMENTS',
  url: `/users/${user}/profile/comments`,
  method: 'GET',
  key: `users/${user}/profile/comments`,
  ...rest,
});
