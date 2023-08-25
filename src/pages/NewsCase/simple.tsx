import React, { Component } from 'react';  
import Dialog from  '../../components/DialogComponent';
import './index.css';
import { NewsInfo } from '../../store/data.config';


interface IPageState{
   datas:Array<any>,
   visible:boolean,
   selected:any
}

export default  class SimpleNews extends Component<any,IPageState> {  
  constructor(props:any) {  
    super(props);  
    this.state ={
      datas : NewsInfo.HotNews,
      visible :false,
      selected:[]
    } 
    // this.handleClick = this.handleClick.bind(this, any);  
  } 


  handleClick(e : any ) {  
    this.setState({visible:true, selected:e})
  }  

  render() {  
    return (  
      <div className = "hotnews">  
        <ul>
        {this.state.datas.map((item) =>
        <li key={item.id} className='hdline0' onClick = {this.handleClick.bind(this, item)}>
           <i className="dot"></i>
           <a className="a3" style={{ fontWeight: item.isStrong ? ': bold' : '' }}>{item.title}</a>
        </li>
      )}
    </ul>
      <Dialog open={this.state.visible} title={this.state.selected.title} onCancel={()=>{this.setState({visible : false})}}>
       <>
        <b>{this.state.selected.desc}</b>
        <p>{this.state.selected.url}</p>
        <p>{this.state.selected.content}</p>
       </>
      </Dialog>
      </div>  
    );  
  }  
}  
