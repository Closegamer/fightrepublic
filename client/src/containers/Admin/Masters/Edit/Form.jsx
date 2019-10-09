import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, SelectField, FileField } from '../../../../fields';
import { MDBBtn } from 'mdbreact';
import store from '../../../../store';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { optionsMaster, optionsRoom, optionsAge } from './selectOptions';
import './styles.css';

let Form = props => {
  const { handleSubmit, loadedLesson } = props;
  const animatedComponents = makeAnimated();
  const master = 'какой-то тренер';
  const age = 'возраст не определен';

  if (loadedLesson && loadedLesson.master) {
    master = loadedLesson.master;
  }
  if (loadedLesson && loadedLesson.age) {
    age = loadedLesson.age;
  }
  return (
    <form onSubmit={handleSubmit}>
      <p className='selectLabel'>Id занятия (auto)</p>
      {loadedLesson && (
        <input
          className='profileInput'
          type='text'
          name='humanId'
          value={loadedLesson.humanId}
          onChange={handleSubmit}
          readOnly
        />
      )}
      {!loadedLesson && (
        <input
          className='profileInput'
          type='text'
          name='humanId'
          onChange={handleSubmit}
          readOnly
        />
      )}
      <p className='selectLabel'>Название</p>
      {loadedLesson && (
        <input
          className='profileInput'
          type='text'
          name='lesson'
          value={loadedLesson.lesson}
          onChange={handleSubmit}
        />
      )}
      {!loadedLesson && (
        <input
          className='profileInput'
          type='text'
          name='lesson'
          onChange={handleSubmit}
        />
      )}
      <p className='selectLabel'>Тренер</p>
      <div className='selectContainer'>
        <Select
          options={optionsMaster}
          defaultValue={master}
          components={animatedComponents}
          isMulti
          name='master'
        />
      </div>
      <p className='selectLabel'>Возраст</p>
      <div className='selectContainer'>
        <Select
          options={optionsAge}
          defaultValue={age}
          components={animatedComponents}
          isMulti
          name='age'
        />
      </div>
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
