import React, { Component } from "react";
import Search from "./search";
import StockList from "./stock-list";

// https://stock-prices--glyn.herokuapp.com/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      error: ""
    };
  }

  fetchStocks = async query => {
    this.setState({ error: "" });
    const url = `https://stock-prices--glyn.herokuapp.com/api/stock-prices?stock=${query}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Please try again");
      const data = await response.json();
      if (data.message) return this.setState({ error: data.message });
      const isDuplicate = this.state.stocks.some(
        stock => stock.stock === data.stock
      );
      if (isDuplicate) throw new Error("Stock data already retrieved");

      this.setState({ stocks: [...this.state.stocks, data] });
    } catch (err) {
      if (!err.message) err.message = "Oops, something went wrong!";
      this.setState({ error: err.message });
    }
  };

  render() {
    return (
      <div>
        <h1>Stock Prices</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <Search fetchStocks={this.fetchStocks} />
        <StockList stocks={this.state.stocks} />
      </div>
    );
  }
}

export default App;
