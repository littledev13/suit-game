import React from "react";
import Button from "../Component/Button";
import Score from "../Component/Score";
import Suit from "../Component/Suit";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 1,
      win: 2,
      lose: 3,
    };
  }
  render() {
    return (
      <>
        <div className="flex flex-col h-screen w-screen items-center bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
          <Score
            round={this.state.round}
            win={this.state.win}
            lose={this.state.lose}
          />
          <div className="suit mt-24 flex gap-16 justify-center flex-wrap">
            <Suit suit="👊" />
            <Suit suit="✌" />
            <Suit suit="🖐" />
          </div>
          <div className="h-screen flex  items-end">
            <Button text="Home" />
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
