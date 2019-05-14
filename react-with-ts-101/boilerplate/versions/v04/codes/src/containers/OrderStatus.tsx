import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { StoreState } from "../types";
import { fetchSuccess, fetchFailure } from "../actions";
import { Counter, MonitorCard } from "../components";

interface OrderStatusProps {
  monitoring: boolean;
  success: number;
  failure: number;
  fetchSuccess(): void;
  fetchFailure(): void;
}

interface OrderStatusState {
  errorRate: string;
}

const mapStateToProps = (state: StoreState) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchSuccess: () => {
    dispatch(fetchSuccess());
  },
  fetchFailure: () => {
    dispatch(fetchFailure());
  }
});

class OrderStatus extends React.Component<OrderStatusProps, OrderStatusState> {
  timerId = null;

  state = {
    errorRate: "0"
  };

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    if (prevProps.monitoring !== this.props.monitoring) {
      if (this.props.monitoring) {
        this.timerId = setInterval(() => {
          this.props.fetchSuccess();
          this.props.fetchFailure();
        }, 200);
      } else {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    }

    if (
      prevProps.success !== this.props.success ||
      prevProps.failure !== this.props.failure
    ) {
      this.setState({
        errorRate:
          this.props.failure > 0
            ? Number((this.props.failure / this.props.success) * 100).toFixed(2)
            : "0"
      });
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <MonitorCard>
        <Counter title="Success" count={this.props.success} />
        <Counter title="Failure" count={this.props.failure} color="red" />
        <Counter title="Error Rate" count={this.state.errorRate} unit="%" />
      </MonitorCard>
    );
  }
}

export const OrderStatusContiner = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderStatus);
