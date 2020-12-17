import React from 'react';
import {Link} from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from 'antd';
import { MailOutlined, SafetyOutlined  } from '@ant-design/icons';
import Img from '../img/myblog.png';
import './index.css';

const Login: React.FC = () => {
    const flag=React.useState(true);
    const {Search}=Input;

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
                <Input prefix={<MailOutlined className="icon"/>} placeholder="E-mail"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Search
                    prefix={<SafetyOutlined className="icon"/>}
                    placeholder="input search text"
                    allowClear
                    enterButton="获取验证码"
                    size="large"
                    onSearch={onSearch}
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Link to="/">
                    Forgot password
                </Link>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" >
                    登录
                </Button>
                Or 
                <Link to="/">register now!</Link>
            </Form.Item>
        </Form>
        </div>
    );
}
export default Login;