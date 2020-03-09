import React, { Component } from "react";
import Loading from "./Loading";

const WithLoader = WrappedComponent =>
  class WithLoader extends Component {
    state = {
      isLoading: true
    };
    componentDidMount() {
      setTimeout(() => this.setState({ isLoading: false }), 5000);
    }
    render() {
      return this.state.isLoading ? (
        <Loading />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };

export default WithLoader;