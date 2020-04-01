import { laboratoriaAPIAction } from '../helpers';

export const updateProfile = ({
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'UPDATE_MY_PROFILE',
  url: '/me/profile',
  method: 'PATCH',
  data,
  key: 'update-my-profile',
  ...rest,
});

export const createMyProject = ({
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'CREATE_MY_PROJECT',
  url: '/me/profile/projects',
  method: 'POST',
  data,
  key: 'create-my-project',
  ...rest,
});

export const updateMyProject = ({
  id,
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'UPDATE_MY_PROJECT',
  url: `/me/profile/projects/${id}`,
  method: 'PATCH',
  data,
  key: 'update-my-project',
  ...rest,
});

export const deleteMyProject = ({
  id,
  ...rest
}) => laboratoriaAPIAction({
  type: 'DELETE_MY_PROJECT',
  url: `/me/profile/projects/${id}`,
  method: 'DELETE',
  key: 'delete-my-project',
  ...rest,
});
