import React from 'react';
import { DesignersProps, DesignersState } from './models';
import { withRouter } from 'react-router';


class Designers extends React.Component<DesignersProps, DesignersState> {
  render() {
    return (
      <div>DESIGNERS!</div>
    );
  }
}

export default withRouter(Designers);