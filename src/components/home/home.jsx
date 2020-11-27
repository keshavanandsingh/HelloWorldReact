import React from 'react';
import './home.css';
import logo from '../../assets/img/bridgelabzlogo.jpg'

class Home extends React.Component {
  url = 'http://bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      userName: 'Stranger',
      nameError: ''
    }
  }

  onclick = ($event) => {
    console.log("Save button is clicked", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("Value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({ userName: event.target.value })
    if (event.target.value.length === 0) {
      this.setState({ userName: 'Stranger' });
      this.setState({ nameError: '' });
    } else {
      if (nameRegex.test(event.target.value)) {
        this.setState({ nameError: '' });
      } else {
        this.setState({ nameError: 'Name is Incorrect!' });
      }
    }
  }

  render() {
    return (
      <div className='app-main'>
        <div className='main'>
          <div>
            <h1>Hello {this.state.userName} from Bridgelabz</h1>
            <img src={logo} onClick={this.onclick}
              alt="The Bridgelabz logo: a Bridge to Employement through lab works" />
          </div>
          <div className='text-box'>
            <input onChange={this.onNameChange} />
            <span className='error-output'>{this.state.nameError}</span>
          </div>
          <div>
            <p>At BridgeLabz, we're a techie community of</p>
            <ul>
              <li>technologists</li>
              <li>thinkers</li>
              <li>builders</li>
            </ul>
            <p>Working together to keep the Tech Employability of Engineers alive and accessible,
            so Tech Companies worldwide can get contributers and creators for Technology Solutions.
            We believe this act of human collaboration across and employability platform is essential
            to individual growth and our collective future</p>
            <p>To know about us, visit <a href="https://www.bridgelabz.com/" target="_blank" rel="noreferer">BridgeLabz</a>  to learn even more about our mission i.e.
              <strong>Employability to all</strong></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
