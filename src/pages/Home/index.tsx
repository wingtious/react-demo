import React, { Component } from 'react';  
import { Progress, Space } from 'antd';
import 'antd/dist/reset.css'

export default class HomeComponent extends Component<any, any> {  
    constructor(props:any) {  
      super(props);  
    } 

    render() {  
      return (
        <> 
        <Space wrap>
           <Progress type="circle" percent={25} />
        </Space>
        <p>任务完成度</p>
        <a href='https://best-inc.feishu.cn/wiki/QHPlwPinAipUa5kVp3CcLyj8nxf'>任务链接</a>
       </>
      );  
    }  
}