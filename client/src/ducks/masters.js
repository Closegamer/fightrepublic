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

const CREATE_MASTER_START = `${prefix}/CREATE_MASTER_START`;
const CREATE_MASTER_SUCCEED = `${prefix}/CREATE_MASTER_SUCCEED`;
const CREATE_MASTER_FAILED = `${prefix}/CREATE_MASTER_FAILED`;

const loadMastersStart = () => ({
  type: LOADING_MASTERS_START
});

const loadMastersSucceed = masters => ({
  type: LOADING_MASTERS_SUCCEED,
  masters,
  fetchedAt: Date.now()
});

const loadMastersFailed = error => ({
  type: LOADING_MASTERS_FAILED,
  error
});

// Creating single master

const createMasterStart = () => ({
  type: CREATE_MASTER_START
});

const createMasterSucceed = master => ({
  type: CREATE_MASTER_SUCCEED,
  master,
  fetchedAt: Date.now()
});

const createMasterFailed = error => ({
  type: CREATE_MASTER_FAILED,
  error
});

// Loading single lesson

const loadMasterStart = () => ({
  type: LOADING_MASTER_START
});

const loadMasterSucceed = loadedMaster => ({
  type: LOADING_MASTER_SUCCEED,
  loadedMaster,
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

const deleteMasterSucceed = deletedMaster => ({
  type: DELETING_MASTER_SUCCEED,
  deletedMaster,
  fetchedAt: Date.now()
});

const deleteMasterFailed = error => ({
  type: DELETING_MASTER_FAILED,
  error
});

export const createMaster = ({ bigPic, ...values }) => (dispatch, getState) => {
  dispatch(createMasterStart());
  let formData = new FormData();

  for (var key in values) {
    formData.append(key, values[key]);
  }
  if (bigPic) {
    for (var i = 0; i < bigPic.length; i++) {
      formData.append('bigPic', bigPic[i], bigPic[i].name);
    }
  }
  return axios
    .post(`/api/masters/create`, formData)
    .then(response => {
      dispatch(createMasterSucceed(response.data.master));
      return response.data;
    })
    .catch(error => {
      dispatch(createMasterFailed(error.message));
    });
};

export const loadMasters = file => (dispatch, getState) => {
  dispatch(loadMastersStart());
  return axios
    .post('/api/masters/list')
    .then(response => {
      dispatch(loadMastersSucceed(response.data.masters));
      return response.data.masters;
    })
    .catch(error => {
      dispatch(loadMastersFailed(error.message));
    });
};

export const loadMaster = humanId => (dispatch, getState) => {
  dispatch(loadMasterStart());
  return axios
    .post('/api/masters/load-single-master', { humanId })
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
    .post('/api/masters/delete', { humanId })
    .then(response => {
      dispatch(deleteMasterSucceed(response.data.deletedMaster));
      // return response.data;
    })
    .catch(error => {
      dispatch(deleteMasterFailed(error.message));
    });
};

const initialState = Immutable({
  mastersLoadingInProgress: false,
  mastersLoadingError: '',
  masterLoadingInProgress: false,
  masterDeletingInProgress: false,
  masterDeletingError: '',
  deletedMaster: null,
  list: [],
  loadedMaster: null
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
        mastersLoadingInProgress: false,
        list: action.masters
      });
    case LOADING_MASTERS_FAILED:
      return Immutable.merge(state, {
        mastersLoadingInProgress: false,
        mastersLoadingError: action.error
      });
    case CREATE_MASTER_START:
      return Immutable.merge(state, {
        masterCreationInProgress: true
      });

    case CREATE_MASTER_SUCCEED:
      return Immutable.merge(state, {
        masterCreatedAt: action.fetchedAt,
        masterCreationInProgress: false
      });

    case CREATE_MASTER_FAILED:
      return Immutable.merge(state, {
        masterCreationInProgress: false,
        masterCreationError: action.error
      });
    case LOADING_MASTER_START:
      return Immutable.merge(state, {
        masterLoadingInProgress: true
      });

    case LOADING_MASTER_SUCCEED:
      return Immutable.merge(state, {
        masterLoadingAt: action.fetchedAt,
        masterLoadingInProgress: false,
        loadedMaster: action.loadedMaster
      });

    case LOADING_MASTER_FAILED:
      return Immutable.merge(state, {
        masterLoadingInProgress: false,
        masterLoadingError: action.error
      });
    case DELETING_MASTER_START:
      return Immutable.merge(state, {
        masterDeletingInProgress: true
      });

    case DELETING_MASTER_SUCCEED:
      const masters = [...state.list.asMutable()];
      return Immutable.merge(state, {
        masterDeletingInProgress: false,
        list: Immutable(
          masters.filter(m => m.humanId !== action.deletedMaster)
        ),
        deletedMaster: action.deletedMaster
      });

    case DELETING_MASTER_FAILED:
      return Immutable.merge(state, {
        masterDeletingInProgress: false,
        masterDeletingError: action.error
      });
    default:
      return state;
  }
}
