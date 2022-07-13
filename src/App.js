import React from 'react';
import './App.css';
import colors from './data';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value })
  }

//   handleChange(e) {
//     this.setState({ [e.target.name] : e.target.value });
//  }

// handleChange({target}) {

//   const { name } = target
//   const value = target.type === 'checkbox' ? target.checked : target.value
//   this.setState({
//   [name]: value
//   })
// }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <ul>
        {
          colors
            .filter((color) => color.name.includes(inputValue))
            .map((color) => (
              <li key={color.hex}>
                <div className='square-color' style={ { background: color.hex, border: '1px solid black' } }></div>
                {color.name}
              </li>
            ))
        }
        </ul>
        <label htmlFor="search">
        <input type="text" id="search" onChange={this.handleChange}/>
        </label>
      </div>
    );
  }
}

export default App;
