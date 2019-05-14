import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { MonitorCard, PlayButton } from "./components";
import { fetchSuccess, fetchFailure } from "./actions";
import { StoreState } from "./types";
import { Typography } from "antd";

import "antd/dist/antd.css";
import "./sass/main.scss";

interface Application {
  timerId: number;
  onStart(): void;
  onStop(): void;
}

interface AppProps {
  success: number;
  failure: number;
  fetchSuccess(): void;
  fetchFailure(): void;
}

const mapStateToProps = (state: StoreState) => ({
  ...state
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchSuccess: () => {
    dispatch(fetchSuccess());
  },
  fetchFailure: () => {
    dispatch(fetchFailure());
  }
});

class MonitorApp extends React.PureComponent<AppProps> implements Application {
  timerId: number = 0;

  onStart = () => {
    this.timerId = setInterval(() => {
      this.props.fetchSuccess();
      this.props.fetchFailure();
    }, 200);
  };

  onStop = () => {
    clearInterval(this.timerId);
    this.timerId = 0;
  };

  render() {
    return (
      <div>
        <header>
          <Typography.Title>React & TS Boilerplate</Typography.Title>
          <Typography>Order Monitor</Typography>
        </header>
        <main>
          <MonitorCard
            success={this.props.success}
            failure={this.props.failure}
          />
          <PlayButton
            monitoring={false}
            onPlay={this.onStart}
            onPause={this.onStop}
          />
        </main>
      </div>
    );
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MonitorApp);

export default App;
