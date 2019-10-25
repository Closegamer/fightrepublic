import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, SelectField, FileField } from '../../../../fields';
import { MDBBtn } from 'mdbreact';
import store from '../../../../store';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { optionsMaster, optionsRoom, optionsAge } from './selectOptions';
import './styles.css';

export const ReduxFormSelect = props => {
  const { input, options } = props;

  return (
    <Select
      {...input}
      onChange={value => input.onChange(value)}
      onBlur={() => input.onBlur(input.value)}
      options={options}
    />
  );
};

let Form = props => {
  const { handleSubmit, loadedLesson } = props;
  const animatedComponents = makeAnimated();

  if (loadedLesson && loadedLesson.lesson) {
    const lesson = loadedLesson.lesson;
  }

  return (
    <form onSubmit={handleSubmit}>
      {loadedLesson && (
        <Field
          name='humanId'
          component={TextField}
          value={loadedLesson.humanId}
          type='text'
          label='Id занятия (auto)'
          group
        />
      )}
      {!loadedLesson && (
        <Field
          name='humanId'
          component={TextField}
          type='text'
          label='Id занятия (auto)'
          group
        />
      )}
      {loadedLesson && (
        <Field
          name='sport'
          component={TextField}
          value={loadedLesson.lesson}
          type='text'
          label='Название'
          group
        />
      )}
      {!loadedLesson && (
        <Field
          name='sport'
          component={TextField}
          type='text'
          label='Название'
          group
        />
      )}
      <Field name='bigPic' component={FileField} />
      <MDBBtn type='submit' className='adminBtn mt15'>
        Создать
      </MDBBtn>
    </form>
  );
};

Form = reduxForm({
  form: 'createLesson'
})(Form);

export default Form;
