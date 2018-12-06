import React from 'react';
import axios from 'axios';
import Table from './Table.jsx'
import styles from './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json')
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
      </div>
    );
  }
}

export default App;
