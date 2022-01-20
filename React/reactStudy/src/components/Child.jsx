import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    console.log('called')
  }
  
  render() {
    console.log('called')
    return (
      <div>
        'child'
      </div>
    );
  }
}

export { Child };