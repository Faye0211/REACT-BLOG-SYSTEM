import React ,{useState} from 'react';
import 'antd/dist/antd.css';
import {Card,Input,Button,Spin, Icon} from 'antd'
import '../static/css/Login.css'
function Login() {
    const [userName,setUserName] = useState('')
    const [password,setpassword] = useState('')
    const [isLoading,setisLoading] = useState(false)
    const checkLogin = () =>{
        setisLoading(true)
        setTimeout(()=>{
            setisLoading(false)
        },1000)
    }
    return(
        <div className='login-div'>
              <Spin tip='Loading...' spinning={isLoading} >
                  <Card title='csm blog system' bordered={true} style={{width:400}}>
                      <Input
                        id='userName'
                        size='large'
                        placeholder='ENTER YOUR NAME'
                        prefix={<Icon type='user' style={{color:'rgba(0,0,0,.25'}} />}
                        onChange={(e)=>{setUserName(e.target.value)}}
                       />
                       <br/><br/>
                       <Input.Password
                        id='password'
                        size='large'
                        placeholder='ENTER YOUR PASSWORD'
                        prefix={<Icon type='key' style={{color:'rgba(0,0,0,.25'}} />}
                        onChange={(e)=>{setpassword(e.target.value)}}
                       />
                       <br/><br/>
                       <Button type='primary' size='large' block onClick={checkLogin}>Login in </Button>
                  </Card>
              </Spin>

        </div>
    )
}
export default Login