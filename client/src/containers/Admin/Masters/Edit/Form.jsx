import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, SelectField, FileField, TextArea } from '../../../../fields';
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
  const { handleSubmit, loadedMaster } = props;
  const animatedComponents = makeAnimated();

  if (loadedMaster && loadedMaster.firstName) {
    const master = loadedMaster.firstName;
  }

  return (
    <form onSubmit={handleSubmit}>
      {loadedMaster && (
        <Field
          name='humanId'
          component={TextField}
          value={loadedMaster.humanId}
          type='text'
          label='Id тренера (auto)'
          group
        />
      )}
      {!loadedMaster && (
        <Field
          name='humanId'
          component={TextField}
          type='text'
          label='Id тренера (auto)'
          group
        />
      )}
      {loadedMaster && (
        <Field
          name='firstName'
          component={TextField}
          value={loadedMaster.firstName}
          type='text'
          label='Имя'
          group
        />
      )}
      {!loadedMaster && (
        <Field
          name='firstName'
          component={TextField}
          type='text'
          label='Имя'
          group
        />
      )}
      {loadedMaster && (
        <Field
          name='lastName'
          component={TextField}
          value={loadedMaster.lastName}
          type='text'
          label='Фамилия'
          group
        />
      )}
      {!loadedMaster && (
        <Field
          name='lastName'
          component={TextField}
          type='text'
          label='Фамилия'
          group
        />
      )}
      {loadedMaster && (
        <Field
          name='specialization'
          component={TextField}
          value={loadedMaster.specialization}
          type='text'
          label='Специализация'
          group
        />
      )}
      {!loadedMaster && (
        <Field
          name='specialization'
          component={TextField}
          type='text'
          label='Специализация'
          group
        />
      )}
      {loadedMaster && (
        <Field
          name='regalies'
          component={TextArea}
          label={'Регалии'}
          group
          type='textarea'
          rows={'15'}
          maxlength={'2000'}
          value={loadedMaster.regalies}
        />
      )}
      {!loadedMaster && (
        <Field
          name='regalies'
          component={TextArea}
          label={'Введите сообщение'}
          group
          type='textarea'
          rows={'15'}
          maxlength={'2000'}
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
  form: 'createMaster'
})(Form);

export default Form;
