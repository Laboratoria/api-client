import { laboratoriaAPIAction } from '../helpers';

export const getProfileComments = ({ user, ...rest }) => laboratoriaAPIAction({
  type: 'PROFILE_COMMENTS',
  url: `/users/${user}/profile/comments`,
  method: 'GET',
  key: `users/${user}/profile/comments`,
  ...rest,
});

export const addProfileComment = ({ user, comment, ...rest }) => laboratoriaAPIAction({
  type: 'PROFILE_COMMENT_ADD',
  url: `/users/${user}/profile/comments`,
  method: 'POST',
  data: comment,
  key: 'profile-comment-add',
  ...rest,
});
