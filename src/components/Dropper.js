import React from "react";
import ReactDOM from "react-dom";

class drooper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Age: <div>
          <br/>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">10-20</option>
            <option value="lime">20-30</option>
            <option value="coconut">30-40</option>
            <option value="mango">40-50+</option>
          </select>
          </div>
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
  }
}

ReactDOM.render(<drooper />, document.querySelector("#root"));
export default drooper;