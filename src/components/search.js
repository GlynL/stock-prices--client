import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchStocks(this.state.query);
    this.setState({ query: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="query"
            onChange={this.handleChange}
            value={this.state.query}
            placeholder="GOOG"
          />
        </form>
      </section>
    );
  }
}

export default Search;
