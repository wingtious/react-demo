import React, { Component } from 'react';  
import './index.css';

class HoverComponent extends Component {  
  constructor(props) {  
    super(props);  
    this.state = {};  
    this.handleClick = this.handleClick.bind(this);  
  }  
  
  handleClick() {  
    console.log(this);
  }  
  
  render() {  
    return (  
      <div>  
        <h1>{this.props.title}</h1>  
        <div className='my-square'> <div className='my-circular'  onClick={this.handleClick} ><p>b</p></div></div>
      </div>  
    );  
  }  
}  
  
export default HoverComponent;