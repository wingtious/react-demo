import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

export const SetInfo = {
        SetName: 'React',
        SetIcon:'reMark',
        rules: [
            {
                required: false,
            }
        ],
        Page:[
            {
                path:"Home",
                key :"Home",
                name:"首页",
                icon:UserOutlined,
                children:[
                    {
                        path:"Home",
                        key :"Home",
                        name:"方法1",
                        icon:LaptopOutlined,
                        children:[],
                        isShow: true
                    },
                    {
                        path:"Home/Other",
                        key :"Home/Other",
                        name:"方法2",
                        icon:NotificationOutlined,
                        children:[],
                        isShow: true
                    },
                ],
                isShow: true
            },
            {
                path:"Login",
                key :"Login",
                name:"登录",
                icon:LaptopOutlined,
                children:[],
                isShow: false
            },
            {
                path:"News",
                key :"News",
                name:"新闻",
                icon:NotificationOutlined,
                children:[],
                isShow: true
            },
            {
                path:"NotFound",
                key :"NotFound",
                name:"无效页",
                icon:UserOutlined,
                children:[],
                isShow: false
            }

        ]
};

export default SetInfo