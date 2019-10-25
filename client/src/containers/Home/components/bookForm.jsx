import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { MDBBtn } from 'mdbreact';
import { TextField, TextArea } from '../../../fields';
import '../styles.css';

const BookForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} autoComplete='on'>
      <Field
        name='user'
        component={TextField}
        label={'Ваше имя'}
        group
        type='text'
      />
      <Field
        name='email'
        component={TextField}
        label={'Ваш email'}
        group
        type='email'
      />
      <Field
        name='header'
        component={TextField}
        label={'Ваш телефон'}
        group
        type='text'
      />
      <Field
        name='message'
        component={TextArea}
        label={'Пожелания по записи'}
        group
        type='textarea'
        rows={'5'}
        maxlength={'200'}
      />
      <MDBBtn className='adminBtn' type='submit'>
        Записаться на тренировку
      </MDBBtn>
    </form>
  );
};

const validate = values => {
  const errors = {};

  if (values && !values.header) {
    errors.header = 'Вы не заполнили поле темы сообщения';
  }

  if (values && !values.message) {
    errors.header = 'Вы не заполнили поле сообщения';
  }

  return errors;
};

export default reduxForm({
  form: 'BookForm',
  validate,
  destroyOnUnmount: false
})(BookForm);
