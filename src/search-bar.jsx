import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="section">
                    <div className="field">
                    <div className="control">
                        <input onChange={this.props.fetchRestaurants} className="input is-primary" type="text" placeholder="City"/>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )}
  }
