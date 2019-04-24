import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { <input
     id="test-username"
     type="text"
     name="username"
     value={this.state.username}
     onChange={this.handleInputChange}
   />};
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" />
      </div>
    );
  }
}

export default TwitterMessage;
