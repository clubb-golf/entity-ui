import React from 'react';
import { ClubsProps, ClubsState } from './models';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { BasicState } from '../../store/models/basic-state';
import { getAllClubs } from './store/actions';


class Clubs extends React.Component<ClubsProps, ClubsState> {
  componentDidMount() {
    this.fetchAllClubs();
  }

  fetchAllClubs = () => {
    getAllClubs();
  }

  render() {
    return (
      <div>CLUBS!</div>
    );
  }
}

const mapState = ({ allClubs }: { allClubs: BasicState }) => {
  const { loading, error, data } = allClubs;
  return { loading, error, data };
};

export default connect(mapState)(withRouter(Clubs));