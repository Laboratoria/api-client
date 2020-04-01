"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMyProject = exports.updateMyProject = exports.createMyProject = exports.updateProfile = void 0;

var _helpers = require("../helpers");

const updateProfile = ({
  data,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'UPDATE_MY_PROFILE',
  url: '/me/profile',
  method: 'PATCH',
  data,
  key: 'update-my-profile',
  ...rest
});

exports.updateProfile = updateProfile;

const createMyProject = ({
  data,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'CREATE_MY_PROJECT',
  url: '/me/profile/projects',
  method: 'POST',
  data,
  key: 'create-my-project',
  ...rest
});

exports.createMyProject = createMyProject;

const updateMyProject = ({
  id,
  data,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'UPDATE_MY_PROJECT',
  url: `/me/profile/projects/${id}`,
  method: 'PATCH',
  data,
  key: 'update-my-project',
  ...rest
});

exports.updateMyProject = updateMyProject;

const deleteMyProject = ({
  id,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'DELETE_MY_PROJECT',
  url: `/me/profile/projects/${id}`,
  method: 'DELETE',
  key: 'delete-my-project',
  ...rest
});

exports.deleteMyProject = deleteMyProject;