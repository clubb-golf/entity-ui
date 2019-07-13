import React from 'react';
import { ClubsProps, ClubsState } from './models';
import { withRouter } from 'react-router';


class Clubs extends React.Component<ClubsProps, ClubsState> {
  render() {
    return (
      <div>CLUBS!</div>
    );
  }
}

export default withRouter(Clubs);