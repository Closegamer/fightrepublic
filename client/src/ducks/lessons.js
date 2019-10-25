import React from 'react';
import axios from 'axios';
import Immutable from 'seamless-immutable';

const prefix = 'lessons';

// загрузка занятий
const LOADING_LESSONS_START = `${prefix}/LOADING_LESSONS_START`;
const LOADING_LESSONS_SUCCEED = `${prefix}/LOADING_LESSONS_SUCCEED`;
const LOADING_LESSONS_FAILED = `${prefix}/LOADING_LESSONS_FAILED`;

const LOADING_LESSON_START = `${prefix}/LOADING_LESSON_START`;
const LOADING_LESSON_SUCCEED = `${prefix}/LOADING_LESSON_SUCCEED`;
const LOADING_LESSON_FAILED = `${prefix}/LOADING_LESSON_FAILED`;

const DELETING_LESSON_START = `${prefix}/DELETING_LESSON_START`;
const DELETING_LESSON_SUCCEED = `${prefix}/DELETING_LESSON_SUCCEED`;
const DELETING_LESSON_FAILED = `${prefix}/DELETING_LESSON_FAILED`;

const CHANGING_STATUS_OF_LESSON_START = `${prefix}/CHANGING_STATUS_OF_LESSON_START`;
const CHANGING_STATUS_OF_LESSON_SUCCEED = `${prefix}/CHANGING_STATUS_OF_LESSON_SUCCEED`;
const CHANGING_STATUS_OF_LESSON_FAILED = `${prefix}/CHANGING_STATUS_OF_LESSON_FAILED`;

const CREATE_LESSON_START = `${prefix}/CREATE_LESSON_START`;
const CREATE_LESSON_SUCCEED = `${prefix}/CREATE_LESSON_SUCCEED`;
const CREATE_LESSON_FAILED = `${prefix}/CREATE_LESSON_FAILED`;

const loadLessonsStart = () => ({
  type: LOADING_LESSONS_START
});

const loadLessonsSucceed = Lesson => ({
  type: LOADING_LESSONS_SUCCEED,
  Lesson,
  fetchedAt: Date.now()
});

const loadLessonsFailed = error => ({
  type: LOADING_LESSONS_FAILED,
  error
});

// creating single lesson

const createLessonStart = () => ({
  type: CREATE_LESSON_START
});

const createLessonSucceed = lesson => ({
  type: CREATE_LESSON_SUCCEED,
  lesson,
  fetchedAt: Date.now()
});

const createLessonFailed = error => ({
  type: CREATE_LESSON_FAILED,
  error
});

// Loading single lesson

const loadLessonStart = () => ({
  type: LOADING_LESSON_START
});

const loadLessonSucceed = lesson => ({
  type: LOADING_LESSON_SUCCEED,
  lesson,
  fetchedAt: Date.now()
});

const loadLessonFailed = error => ({
  type: LOADING_LESSON_FAILED,
  error
});

// Deleting single lesson

const deleteLessonStart = () => ({
  type: DELETING_LESSON_START
});

const deleteLessonSucceed = lesson => ({
  type: DELETING_LESSON_SUCCEED,
  lesson,
  fetchedAt: Date.now()
});

const deleteLessonFailed = error => ({
  type: DELETING_LESSON_FAILED,
  error
});

export const createLesson = ({ bigPic, ...values }) => (dispatch, getState) => {
  dispatch(createLessonStart());
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
    .post(`/api/lessons/create`, formData)
    .then(response => {
      dispatch(createLessonSucceed(response.data.lesson));
      return response.data;
    })
    .catch(error => {
      dispatch(createLessonFailed(error.message));
    });
};

// Changing status of single lesson

const lessonStatusChangeStart = () => ({
  type: CHANGING_STATUS_OF_LESSON_START
});

const lessonStatusChangeSucceed = lesson => ({
  type: CHANGING_STATUS_OF_LESSON_SUCCEED,
  lesson,
  fetchedAt: Date.now()
});

const lessonStatusChangeFailed = error => ({
  type: CHANGING_STATUS_OF_LESSON_FAILED,
  error
});

export const loadLessons = file => (dispatch, getState) => {
  dispatch(loadLessonsStart());
  return axios
    .post('/api/lessons')
    .then(response => {
      dispatch(loadLessonsSucceed());
      return response.data.lessons;
    })
    .catch(error => {
      dispatch(loadLessonsFailed(error.message));
    });
};

export const loadLesson = humanId => (dispatch, getState) => {
  dispatch(loadLessonStart());
  return axios
    .get(`/api/lessons/create/${humanId}`)
    .then(response => {
      dispatch(loadLessonSucceed(response.data.loadedLesson));
    })
    .catch(error => {
      dispatch(loadLessonFailed(error.message));
    });
};

export const deleteLesson = humanId => (dispatch, getState) => {
  dispatch(deleteLessonStart());
  return axios
    .get(`/api/lessons/delete/${humanId}`)
    .then(response => {
      dispatch(deleteLessonSucceed(humanId));
    })
    .catch(error => {
      dispatch(deleteLessonFailed(error.message));
    });
};

export const lessonStatusChange = humanId => (dispatch, getState) => {
  dispatch(lessonStatusChangeStart());
  return axios
    .get(`/api/lessons/status-change/${humanId}`)
    .then(response => {
      dispatch(lessonStatusChangeSucceed(humanId));
    })
    .catch(error => {
      dispatch(lessonStatusChangeFailed(error.message));
    });
};

const initialState = Immutable({
  lessonsCreatingInProgress: false,
  lessonsCreatingError: '',
  lessonsLoadingInProgress: false,
  lessonsLoadingError: ''
});

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE_LESSON_START:
      return Immutable.merge(state, {
        lessonsCreatingInProgress: true
      });
    case CREATE_LESSON_SUCCEED:
      return Immutable.merge(state, {
        lessonsCreatingInProgress: false
      });
    case CREATE_LESSON_FAILED:
      return Immutable.merge(state, {
        lessonsCreatingInProgress: false,
        lessonsCreatingError: action.error
      });
    case LOADING_LESSONS_START:
      return Immutable.merge(state, {
        lessonsLoadingInProgress: true
      });
    case LOADING_LESSONS_SUCCEED:
      return Immutable.merge(state, {
        lessonsLoadingInProgress: false
      });
    case LOADING_LESSONS_FAILED:
      return Immutable.merge(state, {
        lessonsLoadingInProgress: false,
        lessonsLoadingError: action.error
      });
    default:
      return state;
  }
}
