import React from "react";
import requestInvoice from './paymet'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName : '',
      amount: '',
      currency: '',
    };
  }

  //arrow functions don't need .bind(this)
  handleAmount = (event) => {
    this.setState({amount: event.target.value});
  }

  handleFullName = (event) => {
    this.setState({fullName: event.target.value});
  }

  handleCurrency = (event) => {
    this.setState({currency: event.target.value});
  }

  handleSubmit = () => {
    alert(this.state.fullName+ ' submitted: ' + this.state.amount+ ' '+ this.state.currency);
  }
   createInvoice = async(event) => {
    event.preventDefault();
    this.handleSubmit()
    console.log("form submitted")
    const invoiceDetails = await requestInvoice(this.state.amount, this.state.fullName, this.state.currency)
    console.log("this is the Invoice details : ", invoiceDetails)
    window.open(invoiceDetails.data.url, "_blank") //to open new page
    console.log("got a response")

  }

  render() {
    return (
      <div>
        <form onSubmit={this.createInvoice}>
          <label>
            Name:
            <input type="text" value={this.state.fullName} onChange={this.handleFullName} />
          </label>

          <label>
            Amount:
            <input readOnly type="number" value={this.state.amount}  />
          </label>
          <select value={this.state.amount} onChange={this.handleAmount}>
            <option defaultValue value="100">100</option>
            <option value="250">250</option>
            <option  value="500">500</option>
            <option value="1000">1000</option>
          </select>

          <label>
            Currency:
            <input readOnly type="text" value={this.state.currency}  />
          </label>
          <select value={this.state.currency} onChange={this.handleCurrency}>
            <option defaultValue value="TRY">TRY</option>
            <option value="EUR">EUR</option>
            <option  value="USD">USD</option>
            <option value="BTC">BTC</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}