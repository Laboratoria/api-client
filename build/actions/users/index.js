"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProfileEndorsement = exports.updateProfileEndorsement = exports.updateUser = exports.getUser = exports.getAdmissionData = exports.userProfile = exports.userFeed = exports.userCohorts = void 0;

var _helpers = require("../helpers");

const userCohorts = ({
  user,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'USER_COHORTS',
  url: `/users/${user}/cohorts`,
  method: 'GET',
  key: `user/${user}/cohorts`,
  expiration: 1000 * 60 * 5,
  ...rest
});

exports.userCohorts = userCohorts;

const userFeed = ({
  user,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'USER_FEED',
  url: `/users/${user}/feed`,
  method: 'GET',
  key: `user/${user}/feed`,
  expiration: 1000 * 60 * 1,
  ...rest
});

exports.userFeed = userFeed;

const userProfile = ({
  user,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROFILE',
  url: `/users/${user}/profile`,
  method: 'GET',
  key: `user/${user}/profile`,
  expiration: 1000 * 60 * 5,
  ...rest
});

exports.userProfile = userProfile;

const getAdmissionData = ({
  email,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'USER_ADMISSION_DATA',
  url: `/users/${email}/admission-data`,
  method: 'GET',
  key: `user/${email}/admission-data`,
  expiration: 1000 * 60 * 5,
  ...rest
});

exports.getAdmissionData = getAdmissionData;

const getUser = ({
  user,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'USER_PROFILE',
  url: `/users/${user}`,
  method: 'GET',
  key: `user/${user}`,
  ...rest
});

exports.getUser = getUser;

const updateUser = ({
  user,
  data,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'USER_PROFILE_UPDATE',
  url: `/users/${user}/profile`,
  method: 'PATCH',
  data,
  key: `profile-update/${user}`,
  ...rest
});

exports.updateUser = updateUser;

const updateProfileEndorsement = ({
  user,
  data,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'UPDATE_PROFILE_ENDORSEMENT',
  url: `/users/${user}/profile/endorsements`,
  method: 'PUT',
  data,
  key: 'update-profile-endorsement',
  ...rest
});

exports.updateProfileEndorsement = updateProfileEndorsement;

const deleteProfileEndorsement = ({
  user,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'DELETE_PROFILE_ENDORSEMENT',
  url: `/users/${user}/profile/endorsements`,
  method: 'DELETE',
  key: 'delete-profile-endorsement',
  ...rest
});

exports.deleteProfileEndorsement = deleteProfileEndorsement;