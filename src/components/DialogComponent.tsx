import * as React from 'react'
import {Modal} from 'antd';

interface ICommonModalProps{
	open:boolean;
	title:any;
	children : React.ReactElement<any>;
	onCancel?:()=>void,
	width?:string|number
	centered?:boolean
	footer?: React.ReactNode
	className?:string
}


class CommonModal extends React.Component<ICommonModalProps, any> {
	static defaultProps={
		width:720,
		centered:false
	}
	constructor(props:ICommonModalProps){
		super(props)
	}

	render() {
		const {children,title,open,onCancel,width,centered,footer,className} = this.props
		return (
			<Modal
				title={title}
				open={open}
				destroyOnClose={true}
				closable={true}
				onCancel={onCancel}
				width={width}
				maskClosable={false}
				centered
				footer={footer?footer:false}
				className={className}
			>
				{children}
			</Modal>
		);
		}
}
export default CommonModal
