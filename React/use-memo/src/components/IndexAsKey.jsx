import React from 'react';

class IndexAsKey extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      li: [1]
    }
  }
  handleClick = () => {
    this.setState({li: [new Date()].concat(this.state.li)})
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} />
        {this.state.li.map((val, idx)=> <div key={idx}><li>{val.toLocaleString()}</li><input></input></div>)}
      </div>
    );
  }
}

export { IndexAsKey };