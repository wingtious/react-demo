import React, { Component, createRef   } from 'react';  
import './index.css';
  
class HoverComponent extends Component<any,any> {  
  constructor(props:any) {  
    super(props);  
    console.log(111);
    this.state = {
    };  
    this.handleClick = this.handleClick.bind(this);  
  }

  myinput=createRef<HTMLInputElement>()

  handleClick(e : any) {  
    console.log(this.myinput);
    if(e.type=="mouseenter")
    {
      this.myinput.current?.setAttribute('style', 'width:250px');
    }
    else if(e.type =="mouseleave")
    {
      this.myinput.current?.setAttribute('style', 'width:200px');
    }
    console.log(this);
  }  

  
  render() {  
    return (  
      <div>  
        <div className='my-square'> <div ref={this.myinput} className='my-circular1' onMouseEnter={this.handleClick}  onMouseLeave={this.handleClick} ><p>b</p></div></div>
      </div>  
    );  
  }  
}  
  
export default HoverComponent;