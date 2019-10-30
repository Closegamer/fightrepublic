import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, FileField, TextArea } from '../../../../fields';
import { MDBBtn, MDBIcon } from 'mdbreact';
import store from '../../../../store';
import './styles.css';

let Form = props => {
  const { handleSubmit, loadedMaster, initialValues } = props;

  if (loadedMaster && loadedMaster.firstName) {
    console.log('initialValues: ', initialValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name='humanId'
        component={TextField}
        type='text'
        label='Id тренера (auto)'
        group
        readonly
      />
      <Field
        name='firstName'
        component={TextField}
        type='text'
        label='Имя'
        group
      />
      <Field
        name='lastName'
        component={TextField}
        type='text'
        label='Фамилия'
        group
      />
      <Field
        name='specialization'
        component={TextField}
        type='text'
        label='Специализация'
        group
      />
      <Field
        name='regalies'
        component={TextArea}
        label={'Регалии'}
        group
        type='textarea'
        rows={'15'}
        maxlength={'2000'}
      />
      {!!loadedMaster && (
        <React.Fragment>
          <Field name='bigPic' component={FileField} />{' '}
          <p className='red-text'>
            <MDBIcon icon='exclamation-triangle' /> Внимание! Если фото не
            меняется, это поле оставить пустым!
          </p>
        </React.Fragment>
      )}
      {!loadedMaster && <Field name='bigPic' component={FileField} />}
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
