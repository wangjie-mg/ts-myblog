import React from 'react';
import {Link} from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from 'antd';
import { MailOutlined, SafetyOutlined  } from '@ant-design/icons';
import {useStore} from '../../model/index';
import Img from '../img/myblog.png';
import './index.css';

const {Search} = Input;
const Login: React.FC = () => {
    // const flag = React.useState(false);
    const [state] = useStore('login');

    const onfinish=(values:any)=>{
        //发送标识和验证码给后端，后端根据标识判断验证码是否正确。
        message.success(values);
    }
    const onSearch=()=>{
        //发送请求给后端，后端生成验证码，发邮件并返回这个验证码的标识
        //登录的时候把标识发送给后端后端按照标识去查询验证码是否正确
        
    }


    return (
        <div className="main-from">
            <div className="from-img">
            <img src={Img} alt="myblog"/>
            </div>
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onfinish}
        >
            <Form.Item
                name="email"
                rules={[
                {
                    type: 'email',
                    message: '输入邮箱格式不对',
                },
                {
                    required: true,
                    message: '请输入你的邮箱',
                },
                ]}
            >
                <Input 
                    prefix={<MailOutlined className="icon"/>} 
                    placeholder="邮箱" 
                    size="large"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入验证码！' }]}
            >
                <Search
                    prefix={<SafetyOutlined className="icon"/>}
                    placeholder="验证码"
                    allowClear
                    enterButton="获取验证码"
                    size="large"
                    onSearch={onSearch}
                />
                
            </Form.Item>
            <p className="blue">无需注册，登录默认注册账号！！！</p>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" disabled={state.flag}>
                    登录
                </Button>
            </Form.Item>
        </Form>
<p className="footer">ZYPC©2020 Created 仅供学习交流</p>
        
        </div>
    );
}
export default Login;