import React from 'react';
import axios from 'axios';
import Immutable from 'seamless-immutable';

const prefix = 'masters';

// загрузка занятий
const LOADING_MASTERS_START = `${prefix}/LOADING_MASTERS_START`;
const LOADING_MASTERS_SUCCEED = `${prefix}/LOADING_MASTERS_SUCCEED`;
const LOADING_MASTERS_FAILED = `${prefix}/LOADING_MASTERS_FAILED`;

const LOADING_MASTER_START = `${prefix}/LOADING_MASTER_START`;
const LOADING_MASTER_SUCCEED = `${prefix}/LOADING_MASTER_SUCCEED`;
const LOADING_MASTER_FAILED = `${prefix}/LOADING_MASTER_FAILED`;

const DELETING_MASTER_START = `${prefix}/DELETING_MASTER_START`;
const DELETING_MASTER_SUCCEED = `${prefix}/DELETING_MASTER_SUCCEED`;
const DELETING_MASTER_FAILED = `${prefix}/DELETING_MASTER_FAILED`;

const loadMastersStart = () => ({
  type: LOADING_MASTERS_START
});

const loadMastersSucceed = Lesson => ({
  type: LOADING_MASTERS_SUCCEED,
  Lesson,
  fetchedAt: Date.now()
});

const loadMastersFailed = error => ({
  type: LOADING_MASTERS_FAILED,
  error
});

// Loading single lesson

const loadMasterStart = () => ({
  type: LOADING_MASTER_START
});

const loadMasterSucceed = lesson => ({
  type: LOADING_MASTER_SUCCEED,
  lesson,
  fetchedAt: Date.now()
});

const loadMasterFailed = error => ({
  type: LOADING_MASTER_FAILED,
  error
});

// Deleting single lesson

const deleteMasterStart = () => ({
  type: DELETING_MASTER_START
});

const deleteMasterSucceed = master => ({
  type: DELETING_MASTER_SUCCEED,
  master,
  fetchedAt: Date.now()
});

const deleteMasterFailed = error => ({
  type: DELETING_MASTER_FAILED,
  error
});

export const createMaster = ({ firstName, lastName, profession }) => (
  dispatch,
  getState
) => {
  dispatch(createMasterStart());
  return axios
    .get(`/api/masters/create/${humanId}`)
    .then(response => {
      dispatch(createMasterSucceed(humanId));
    })
    .catch(error => {
      dispatch(createMasterFailed(error.message));
    });
};

export const loadMasters = file => (dispatch, getState) => {
  dispatch(loadMastersStart());
  return axios
    .post('/api/masters')
    .then(response => {
      dispatch(loadMastersSucceed());
      return response.data.masters;
    })
    .catch(error => {
      dispatch(loadMastersFailed(error.message));
    });
};

export const loadMaster = humanId => (dispatch, getState) => {
  dispatch(loadMasterStart());
  return axios
    .get(`/api/masters/create/${humanId}`)
    .then(response => {
      dispatch(loadMasterSucceed(response.data.loadedMaster));
    })
    .catch(error => {
      dispatch(loadMasterFailed(error.message));
    });
};

export const deleteMaster = humanId => (dispatch, getState) => {
  dispatch(deleteMasterStart());
  return axios
    .get(`/api/masters/delete/${humanId}`)
    .then(response => {
      dispatch(deleteMasterSucceed(humanId));
    })
    .catch(error => {
      dispatch(deleteMasterFailed(error.message));
    });
};

const initialState = Immutable({
  mastersLoadingInProgress: false,
  mastersLoadingError: ''
});

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_MASTERS_START:
      return Immutable.merge(state, {
        mastersLoadingInProgress: true
      });
    case LOADING_MASTERS_SUCCEED:
      return Immutable.merge(state, {
        mastersLoadingInProgress: false
      });
    case LOADING_MASTERS_FAILED:
      return Immutable.merge(state, {
        mastersLoadingInProgress: false,
        mastersLoadingError: action.error
      });
    default:
      return state;
  }
}
