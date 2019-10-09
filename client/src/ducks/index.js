import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import balance from './balance';
import auth from './auth';
import users from './users';
import app from './app';
import lessons from './lessons';
import masters from './masters';

export default combineReducers({
  auth,
  balance,
  form,
  app,
  users,
  lessons,
  masters
});
