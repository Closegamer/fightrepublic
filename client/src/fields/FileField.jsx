import React, { Component } from 'react';
import { MDBFileInput } from 'mdbreact';
import { getError } from './utils';

class FileField extends Component {
  render() {
    const { meta, input } = this.props;
    const error = getError(meta);
    return (
      <MDBFileInput
        getValue={input.onChange}
        btnTitle='Картинка'
        btnColor='red darken-2'
      >
        <div className='invalid-tooltip'>{error}</div>
      </MDBFileInput>
    );
  }
}

export default FileField;
