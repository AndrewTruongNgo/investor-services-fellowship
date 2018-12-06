import React from 'react';
import axios from 'axios';
import Table from './Table.jsx'
import styles from './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      date: null,
    };
    this.inputDate = this.inputDate.bind(this);
    this.dateClick = this.dateClick.bind(this);
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json')
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  }

  inputDate(event) {
    this.setState({
      date: event.target.value,
    })
  }

  dateClick() {
    // Once input has been entered and submitted, a get request will be made with the url and date provided.
    // Once data is successfully received, the state will change and the table will dynamically re-render

    const { date } = this.state;
    const dateStr = date.split('/');
    let newDateStr = `?date=${dateStr[2]}-${dateStr[0]}-${dateStr[1]}`;
    axios.get(`https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json${newDateStr}`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h2 id="title">Krakatoa Ventures Fund I, L.P.</h2>
        <Table investments={data} />
        <input id="date-input" onChange={this.inputDate} placeholder="MM/DD/YYYY"></input>
        <button id="date-btn" onClick={this.dateClick}>Submit</button>
      </div>
    );
  }
}

export default App;
