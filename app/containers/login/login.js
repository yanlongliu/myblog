import React, {Component} from 'react';
import style from './Login.css';

export default class Login extends Component {

  handleSubmit = (event) => {
    console.log(this.props.match.params.id);
    console.log(this.props.match.params);
  }

  render() {
    return (
         <div className={style.wrapper}>
            <a onClick={this.handleSubmit}>登录</a>
         </div>
    );
  }
}