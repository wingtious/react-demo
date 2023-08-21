import React, { Component } from 'react';  
import './index.css';

interface IState{
    id: string,
    title: string,
    desc:string,
    url :string,
    isStrong: boolean,
    content:React.ReactElement<any>,
}

interface IPageState{
   datas:Array<IState>,
   visible:boolean,
   selected:IState
}


class News extends Component<any, IPageState> {  
  constructor(props:any) {  
    super(props);  
    this.state =
    {
       datas:[
        { 
            id : "1",
            title:"微视频｜你身边的这抹绿色 总书记深深牵挂",
            desc:"",
            url:"https://h.xinhuaxmt.com/vh512/share/11637295?d=134b29e&channel=weixin",
            isStrong:true,
            content:
            <div id="detail">
            <p>　　新华社柏林8月17日电&nbsp;<strong><b color='navy'>专访：对华“去风险”“脱钩”都不符合德国利益——访德国智库席勒研究所创始人兼主席拉鲁什</b></strong></p>
            <p>　　新华社记者李超</p>
            <p>　　德国智库席勒研究所创始人兼主席黑尔佳·策普·拉鲁什日前在接受新华社记者专访时表示，不管是对华“去风险”还是“脱钩”，都不符合德国自身利益，最终只会给德国经济造成危害。</p>
            <p><span>　　这是7月10日拍摄的从德国杜伊斯堡返回西安国际港站的X8008次中欧班列。</span><span>新华社记者张博文摄</span></p>
            <p>　　拉鲁什表示，“去风险”这个词只是话术游戏，其核心指向依然是“脱钩”。“事实上，德国并不面临任何来自中国的风险。中国是最可靠的贸易和经济伙伴之一。”</p>
            <p>　　她说，德中两国经济联系紧密、利益交织。从经济上来讲，对华“脱钩”“去风险”无异于“自杀”行为。“与中国脱钩将导致德国经济崩溃。”</p>
            <p>　　拉鲁什说，德国国内部分声音反对同中国加强合作，其背后完全是受意识形态驱使。她举例说，中国在全球南方国家减贫事业中作出了巨大贡献，这引发部分势力的警惕，一些人试图用意识形态标签来分裂世界。</p>
            <p>　　这是5月29日在安徽合肥拍摄的大众安徽模块化电驱动平台工厂车身车间一角。</p>
            <p>　　她强调，德国不应该陷入这些由地缘政治意图制造的话术操纵中。德国很多工业协会都已明确警告同中国“脱钩”将带来灾难。</p>
            <p>　　谈及当前德国经济形势，拉鲁什说，当下德国面临能源价格高企、企业外流等问题，整体经济正经受去工业化危机。要走出当下经济困境，德国唯一的选择就是同中国加强合作。</p>
            <p>　　她表示，同他国开展科技研发合作是提高经济生产力的有效途径，“而中国显而易见应该是德国在这方面的合作伙伴”。生物科学、数字技术、人工智能等都是两国可以深化合作的领域。</p>
            <p>　　她还建议，德国应该同中国更紧密合作，共同促进全球南方国家发展和繁荣。</p>
            </div>,
        },
        { 
            id : "2",
            title:"遇见习近平丨我不由自主想起了那首旋律",
            desc:"新华社纪录片｜生态贵州",
            url:"https://content-static.cctvnews.cctv.com/snow-book/index.html?item_id=272716987507894704&toc_style_id=feeds_default&track_id=E55D6FD1-8D26-4151-9E3F-56F0113444E5_713755381095&share_to=wechat",
            isStrong:true,
            content:<></>
        },
        { 
            id : "3",
            title:"“只要人在，堤坝就在！”他们是堤坝上的“排险者”",
            desc:"",
            url:"https://content-static.cctvnews.cctv.com/snow-book/index.html?item_id=11625484403391517343&toc_style_id=feeds_default&track_id=9525CEFA-6170-489C-9AE4-89D4BA1419C7_713717035519&share_to=copy_url",
            isStrong:true,
            content:<></>
        },
        { 
            id : "4",
            title:"各地增植补绿 打造生态宜居城市",
            desc:"",
            url:"https://news.cctv.com/2023/08/14/ARTIvFdnxDp6sUkBU3boXIrq230814.shtml",
            isStrong:true,
            content:<></>
        },
        { 
            id : "5",
            title:"24条政策措施优化外商投资环境 三个“重点”值得关注",
            desc:"",
            url:"https://content-static.cctvnews.cctv.com/snow-book/index.html?item_id=10563820454775856376&t=1691999925069&toc_style_id=feeds_default&track_id=E78E8335-9CEC-47E9-89EF-48510B30027D_713716683152&share_to=copy_url",
            isStrong:true,
            content:<></>
        }],
        
       visible: false,
       selected: {
        id : "",
        title:"",
        desc:"",
        url:"",
        isStrong:false,
        content:<></>
       },
    };  

    // this.handleClick = this.handleClick.bind(this, any);  
  } 


  handleClick(e : IState) {  
    this.setState({visible : true,selected:e})
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
  
export default News;