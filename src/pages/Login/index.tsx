import { InfoCircleOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Tooltip,Select,Button ,InputRef,Form  } from 'antd';
import React, {  createRef   } from 'react';  
import { useNavigate } from 'react-router-dom'
import './index.css';
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useReduxSelector } from '../../redux/hooks'
import { changeLanguage } from "../../redux/reducer/languageReducer";
import { login } from "../../redux/reducer/loginReducer";

export default function LoginComponent() {
  var name = createRef<InputRef>();
  var pwd = createRef<InputRef>();
  const navigate = useNavigate()
  const language = useReduxSelector(state => state.language.language)
  const languageList = useReduxSelector(state => state.language.languageList)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const handleChange= (val:string) => {
    console.log(`selected ${val}`);
    dispatch(changeLanguage({val}))
  };


  
  const onFinish = (values: FieldType) => {
    console.log('Success:', values);
    dispatch(login({userjd:1,name :values.username,pwd: values.password}))
    navigate('/', { replace: true })
  };

  type FieldType = {
    username?: string;
    password?: string;
  };

  return (
    <div className='login'>
      <Form  className='login-panel' name="basic" autoComplete="off" onFinish={onFinish} >
      <img className='login-img' src={require('../../assets/login.png')} alt='gyg' />
      <Form.Item<FieldType> label="" name="username" rules={[{ required: true, message: t('header.EnterName') }]} >
        <Input ref={name}
          placeholder={t('header.EnterName')}
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={ <Tooltip title="Extra information"> <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} /> </Tooltip> }
        />
      </Form.Item>
      <Form.Item<FieldType> label="" name="password" rules={[{ required: true, message: t('header.EnterPwd') }]} >
      <Input.Password ref={pwd}
          placeholder={t('header.EnterPwd')}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
    </Form.Item>
    <Form.Item<FieldType> >
    <Select
        defaultValue= {language}
        style={{ width: '100%' }}
        onChange={handleChange}
        options= {languageList.map((item) => ({ value: item.value, label: item.label }))}
      />
     </Form.Item>
     <Form.Item>
      <Button htmlType="submit" type="primary" style={{ width: '100%' }} >{t('header.signIn')}</Button>
      </Form.Item>
      <div className="login-borwer">{t('header.Borwer')}
        <a href="https://www.google.com/chrome/" target="_blank">
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEnklEQVRYR7WXb0xbVRTAz7ktyLbyR9wGBMbKkDHjkE6gWwKBYrJlmk1xkcyone2iJiZzDjWL2RdZ4hejGZiQOOOHlpiZkGWkSCAL0fHaUGIIc3UDN3AITGpH9q9FdPxZ3zG3paOF1/ceTt7Hd88953fOPefccxFW+A3XmAyiCFUILA0B0ghBDwQeroYRCQXt3c6VqEQ1wtwoEXsfgGoAME3FHjtDsbnAIQhKsrIAV2tMeiS0IaBJSZHUOgEJhGR9yiGMxdsfF2B4/3MWYtSg0mMZPvKjiHVb2y/YpYQkAYZerLYD4pv/xWuZPfbCtgvWpevLAFbJeMTuMogYgHDYwfY/ex6jDkWwRh/HQ4BMm0XvdNzg5ZS6mgBct4hiXiQxowDMQs3INNZdCVSuNgCvjm1t3dXcTggg0/aGCZF1E1GgvcOHKfNiSjwITUaWN/2946Ns0+YixlgoWvRgKpDo77yScKslD1HMVuMAA9qBRsGzAHDIjgihrDdMzrgae29LRiHZ/JZLt2dfpc8P3vMD7PqlG5i0JgHmt2VR8JXS4I7kJExZM3rUzWbHy5UhqFljFCwLAGY/Ij48+yZhcnj7vfmt0Uoixm09zNU1CMUAi/JhOQrUltLAgRIqTxo/4dLcH1Q4SvJrjMLjGAl/jLG5oKe9w2eI/ONh3/jFV9mtF9F9tp/JerfnaXJZK8TKtVdf9iodB0Oqxkyb2YKIy0rvw5/v9O0fv2/kEOs/bXDPZOiL3mnWxs2NRQcocOqgOJ37oGUs8fZ38keBVIeZtkP1iPDJ0jNjIk04On0pPCEzmlunmnu1nq5BVFUhPAqWXf5i3XWzfEkTnYwLwIGq/vjHebL/blXWtw44cob13ZnGUESUvtx0cH9WGyxfd+0leVElAF6WZ7puTpd9fS57JQBP6Kiv6XXR+MgAHH/LvTl3h/V00UqP4LBxIn/t7+/K9wQegSyb+RggNsjF6oeqj11aTc6WD1pYCgAqJuKpg0Gv6iTcYHvNoEXtJTkAQ7p+qMX0UWHrRew5288q5GRrS0U37wWqypB3w3Arjm1EUgYajVbn8zklVbYe5uwaxKrlMjRVW0qXD5RQxZ+jn3cWzPa8oJCsAY2xm8+VHGCxFctt+nLnYWFv9rMmnx8mzg+wkWs+1HB53or3bhfzs9Ig5/vRrh9fnWkqje6s0jpjWrFFjyiOKpUXX8/VbZho2vX2WIEu8xnGeE4AiKI49dv0zctHfvpGfyL115F9qTMSEYrVzhIoD3cIYzHXMaJUaNVghWU2J8553U9OKt6GRNSm3SnU8D0xAwlA0KMcuvhAvfnevtzHRKVmFWAJZODexwAsJKPkvaAmBruT//7FtulusaIsUp2mTGiMyC0bStUm5FJDQ4UTw+s0FHOFS1RKaAaI/i85lq8U4uh6v/v4xr8UhpBw1i+Fivsw4R2SAOqVciKFBacGC70kIxcgoGNao6D+YRKh5JMyQNAuVx2ns28545cdNbMEqI8knFR+qHqchkHEev44jfY0TtkFAMjBEOxY9oiPUyni0N0BGhMBptlzJ5N262ZnQnIM/AzAo8ZotN5/AYJq57vIypCyAAAAAElFTkSuQmCC" alt="google" title="google" />
        </a>
        <a href="https://www.firefox.com.cn/" target="_blank">
          <img src="data:image/png;base64,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" alt="firefox" title="firefox" />
        </a>
      </div>
      </Form>
   </div>
  );
}


