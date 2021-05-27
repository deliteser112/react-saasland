import React, { Component } from "react";

export default class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      removed: false
    };
  }

  componentDidMount() {
    window.onload = () => {
      this.setState({ loaded: true });
      setTimeout(() => {
        this.setState({ remove: true });
      }, 900);
    };
  }

  render() {
    return this.state.removed ? null : (
      <div id="preloader">
        <div id="ctn-preloader" className={("ctn-preloader", {
            loaded: this.state.loaded
          })}>
          <div className="animation-preloader">
            <div className="spinner" />
            <div className="txt-loading">
              <span data-text-preloader="S" className="letters-loading">
                S
              </span>
              <span data-text-preloader="A" className="letters-loading">
                A
              </span>
              <span data-text-preloader="A" className="letters-loading">
                A
              </span>
              <span data-text-preloader="S" className="letters-loading">
                S
              </span>
              <span data-text-preloader="L" className="letters-loading">
                L
              </span>
              <span data-text-preloader="A" className="letters-loading">
                A
              </span>
              <span data-text-preloader="N" className="letters-loading">
                N
              </span>
              <span data-text-preloader="D" className="letters-loading">
                D
              </span>
            </div>
            <p className="text-center">Loading</p>
          </div>
          <div className="loader">
            <div className="row">
              <div className="col-3 loader-section section-left">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-left">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
