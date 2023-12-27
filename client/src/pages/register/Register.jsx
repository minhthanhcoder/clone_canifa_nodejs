import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validator from "validator"

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const handleRegister = (e) => {
      e.preventDefault();
      
    }
    
    const [passErr,setPassErr] = useState("")
    const [rePassErr,setRePassErr] = useState("")
    const [emailErrMsg,setEmailErrMsg] = useState("")
    const handleCheckError = (email) => {
      if(validator.isEmpty(email)) {
        setEmailErrMsg("Xin hãy nhập địa chỉ Email!")
      }else if(!validator.isEmail(email)) {
        setEmailErrMsg("Email không đúng định dạng!")
      }else {
        setEmailErrMsg("")
        setEmail(email);
      }
    }
    
    const handleCheckPassword = (password)=> {
        if(validator.isEmpty(password)){
          setPassErr('Xin hãy nhập mật khẩu!')
        }else if (password.length > 0 &&password.length < 8) {
          setPassErr('Mật khẩu trên 8 ký tự !')
         }else {
          setPassErr('')
          setPassword(password);
         }
    }
    const handleCheckRePassWord = (rePass)=> {
      if(validator.isEmpty(rePass)){
        setRePassErr('Xin hãy nhập lại mật khẩu!')
    }else if (!validator.equals(password, rePass)) {
      setRePassErr('Mật khẩu nhập lại không trùng khớp !');
     }else {
      setRePassErr('');
     }
    }

  return (
    <>
    <div className="form-main flex justify-center items-center">
      <div className='form-container_register h-6'>
          <div className="form_title">Đăng Ký</div> 
          <form onSubmit={e=>handleRegister(e)}>
              <div className='input_items'>
              <input 
              className='input_style' 
              type="text" 
              name='email' 
              onBlur={(e)=>handleCheckError(e.target.value)}
              placeholder='Nhập Email hoặc Số điện thoại'/>
              <p className='text-red-500 text-left ml-11 p-1'>{emailErrMsg }</p>
              </div>

              <div className='input_items'>
              <input className='input_style' 
              placeholder='Nhập mật khẩu' 
              type="password" 
              name='password'
              onBlur={(e)=>handleCheckPassword(e.target.value)}
               />
              <p className='text-red-500 text-left ml-11 p-1'>{passErr}</p>

              </div>

              <div className='input_items'>
              <input className='input_style' 
              placeholder='Nhập mật lại khẩu' 
              type="password" name='password'
              onBlur={(e) => handleCheckRePassWord(e.target.value)}
              onChange={(e)=> setRePassword(e.target.value)}
              />
              <p className='text-red-500 text-left ml-11 p-1'>{rePassErr}</p>
              </div>

              <div className='form_btn'>
                <Link to={"/"}> <button className='form_btn-item form_cancel_btn'>Quay lại</button></Link>
                 <button className='form_btn-item form_login_btn' type='submit'>Xác nhận</button>
              </div>
              <div className='form_change'>Bạn đã có tài khoản, <Link to={"/login-auth"}>
                  <button className='form_change-btn'>Đăng nhập ngay</button>
                  </Link> </div>
          </form>
      </div>
    </div>
  </>
  )
}

export default Register
