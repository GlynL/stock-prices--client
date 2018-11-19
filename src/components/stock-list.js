import React, { Component } from "react";

function renderStocks(stocks) {
  return stocks.map(stock => {
    console.log(stock);
    return (
      <li key={stock.stock}>
        <div>
          {stock.stock}: {stock.price}
        </div>
        <div>Likes: {stock.likes}</div>
      </li>
    );
  });
}

const StockList = props => {
  return (
    <section>
      <h2>Stocks</h2>
      <ul>{renderStocks(props.stocks)}</ul>
    </section>
  );
};

export default StockList;
