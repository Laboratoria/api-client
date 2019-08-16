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

export const updateProfileComment = ({
  user,
  comment: { id: commentId, ...data },
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROFILE_COMMENT_UPDATE',
  url: `/users/${user}/profile/comments/${commentId}`,
  method: 'PUT',
  data,
  key: 'profile-comment-update',
  ...rest,
});

export const deleteProfileComment = ({ user, commentId, ...rest }) => laboratoriaAPIAction({
  type: 'PROFILE_COMMENT_DELETE',
  url: `/users/${user}/profile/comments/${commentId}`,
  method: 'DELETE',
  key: 'profile-comment-delete',
  ...rest,
});
