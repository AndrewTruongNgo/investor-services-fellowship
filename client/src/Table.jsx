import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const isShown = true;
    const { investments } = this.props;
    return (
      <div>
        <table width="800">
          <tbody>
            <tr>
              <td>Investments</td>
              <td>Asset</td>
              <td>Investment Date</td>
              <td>Shares</td>
              <td>Cost</td>
            </tr>
          </tbody>
          {investments.map(inv => (
            <tbody key={inv.id}>
              <tr>
                <td>
                  {inv.name}
                </td>
                <td></td>
                <td></td>
                <td>{inv.quantity}</td>
                <td>${inv.cost.$}</td>
              </tr>
              {isShown &&
                <tr>
                  <td></td>
                  <td>
                    {inv.issued_assets.map(asset => (
                      <div>{asset.asset_class}</div>
                    ))}
                  </td>
                  <td>
                    {inv.issued_assets.map(asset => (
                      <div>{asset.investment_date}</div>
                    ))}
                  </td>
                  <td>
                    {inv.issued_assets.map(asset => (
                      <div>{asset.quantity}</div>
                    ))}
                  </td>
                  <td>
                    {inv.issued_assets.map(asset => (
                      <div>${asset.cost.$}</div>
                    ))}
                  </td>
                </tr>
              }
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default Table;
