import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: "kavipriyan",
      location: "USA",
    };

    console.log(" constructor is called ");
  }

  async componentDidMount() {
    console.log("component did mount called");
    const data = await fetch("https://dummyjson.com/products");
    const jsondata = await data.json;
    console.log(jsondata);

    this.setState({
      name1: "priyan",
      location: "uk",
    });
  }

  componentDidUpdate() {
    console.log("component did updat is called ");
  }

  componentWillUnmount() {
    console.log("component unmount is called ");
  }

  render() {
    const { name, location, position } = this.props;
    const { count } = this.state;
    console.log(name + "render method is called ");
    return (
      <div className="user-card">
        <h2>Name : {this.state.name1}</h2>
        <h2>Location : {location} </h2>
        <h2>Position : {position}</h2>
        <h3>Count : {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Button
        </button>
      </div>
    );
  }
}
export default UserClass;
