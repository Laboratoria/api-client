import { laboratoriaAPIAction } from '../helpers';

export const userCohorts = ({ user, ...rest }) => laboratoriaAPIAction({
  type: 'USER_COHORTS',
  url: `/users/${user}/cohorts`,
  method: 'GET',
  key: `user/${user}/cohorts`,
  expiration: 1000 * 60 * 5,
  ...rest,
});

export const userFeed = ({ user, ...rest }) => laboratoriaAPIAction({
  type: 'USER_FEED',
  url: `/users/${user}/feed`,
  method: 'GET',
  key: `user/${user}/feed`,
  expiration: 1000 * 60 * 1,
  ...rest,
});

export const userProfile = ({ user, ...rest }) => laboratoriaAPIAction({
  type: 'PROFILE',
  url: `/users/${user}/profile`,
  method: 'GET',
  key: `user/${user}/profile`,
  expiration: 1000 * 60 * 5,
  ...rest,
});

export const getAdmissionData = ({ email, ...rest }) => laboratoriaAPIAction({
  type: 'USER_ADMISSION_DATA',
  url: `/users/${email}/admission-data`,
  method: 'GET',
  key: `user/${email}/admission-data`,
  expiration: 1000 * 60 * 5,
  ...rest,
});

export const getUser = ({
  user,
  ...rest
}) => laboratoriaAPIAction({
  type: 'USER_PROFILE',
  url: `/users/${user}`,
  method: 'GET',
  key: `user/${user}`,
  ...rest,
});

export const updateUser = ({
  user,
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'USER_PROFILE_UPDATE',
  url: `/users/${user}/profile`,
  method: 'PATCH',
  data,
  key: `profile-update/${user}`,
  ...rest,
});

export const updateProfileEndorsement = ({
  user,
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'UPDATE_PROFILE_ENDORSEMENT',
  url: `/users/${user}/profile/endorsements`,
  method: 'PUT',
  data,
  key: 'update-profile-endorsement',
  ...rest,
});

export const deleteProfileEndorsement = ({
  user,
  ...rest
}) => laboratoriaAPIAction({
  type: 'DELETE_PROFILE_ENDORSEMENT',
  url: `/users/${user}/profile/endorsements`,
  method: 'DELETE',
  key: 'delete-profile-endorsement',
  ...rest,
});
