import './css/Popup.css';
import React, {Component} from 'react';

/*
 * Summary of Popup component
 *
 * Props: { icon, label, onBlur }
 *
 * State: { active }
 *
 * Potential parents (so far):
 * - Toolbar
 * */

export default class Popup extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  onClick() {
    this.setState({active: !this.state.active});
  }

  onBlur() {
    this.setState({active: false});
    this.props.onBlur();
  }

  render() {
    return (
      <div className={`${this.state.active ? 'active ' : ''}popup-menu`} onBlur={this.onBlur.bind(this)}>
        <button
          tabIndex={-1}
          className={`popup-menu--button`}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          onClick={this.onClick.bind(this)}
        >
          {this.props.icon}
          {this.props.label ? this.props.label : ''}
        </button>
        <div className="popup-menu--content">{this.props.children}</div>
      </div>
    );
  }
}
