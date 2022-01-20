import React from 'react';
import { Child } from './Child';

class ButtonComponent extends React.Component {
  handleClick() {
    console.log('this is : ', this)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          Click me
        </button>
        <Child onClick={() => this.handleClick()}/>
      </div>
    );
  }
}

export { ButtonComponent };