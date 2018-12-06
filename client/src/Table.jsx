import React from 'react';
import styles from './styles/Table.css';


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.displayButton = this.displayButton.bind(this);
  }

  displayButton() {
    const { display } = this.state;
    this.setState({
      display: !display,
    });
  }


  render() {
    const { display } = this.state;
    const { investments } = this.props;
    return (
      <div>
        <table width="800">
          <tbody>
            <tr className="table-header">
              <td>Investments</td>
              <td>Asset</td>
              <td>Investment Date</td>
              <td>Shares</td>
              <td>Cost</td>
            </tr>
          </tbody>
          {investments.map(inv => (
            <tbody key={inv.id} className="table-body">
              <tr>
                <td>
                  {inv.name}
                </td>
                <td />
                <td />
                <td>{inv.quantity}</td>
                <td>${inv.cost.$}</td>
              </tr>
              {display && (
                <tr>
                  <td />
                  <td>
                    {inv.issued_assets.map(asset => (
                      <div key={asset.id}>{asset.asset_class}</div>
                    ))}
                  </td>
                  <td>
                    {inv.issued_assets.map(asset => (
                      <div key={asset.id}>{asset.investment_date}</div>
                    ))}
                  </td>
                  <td>
                    {inv.issued_assets.map(asset => (
                      <div key={asset.id}>{asset.quantity}</div>
                    ))}
                  </td>
                  <td>
                    {inv.issued_assets.map(asset => (
                      <div key={asset.id}>${asset.cost.$}</div>
                    ))}
                  </td>
                </tr>
              )}
            </tbody>
          ))}
        </table>
        <br />
        <br />
        {display ? (
          <button className="display-button" onClick={this.displayButton}>Collapse All</button>
        ) : (
          <button className="display-button" onClick={this.displayButton}>Show All</button>
        )}
      </div>
    );
  }
}

export default Table;
