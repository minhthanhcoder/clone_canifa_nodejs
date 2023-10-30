import React from 'react'
import { Link } from 'react-router-dom'

function LoginAuth() {
  return (
    <>
          <div className="form-main flex justify-center items-center">
            <div className='form-container h-6'>
                <div className="form_title">Đăng Nhập</div> 
                <form>
                    <div className='input_items'>
                    <input className='input_style' type="text" name='email' placeholder='Nhập Email hoặc Số điện thoại'/>
                    </div>
    
                    <div className='input_items'>
                    <input className='input_style' placeholder='Nhập mật khẩu' type="password" name='password' />
                    </div>
    
                    <div className='form_btn'>
                      <Link to={"/"}> <button className='form_btn-item'>Quay lại</button></Link>
                       <button  className='form_btn-item' type='submit'>Xác nhận</button>
                    </div>
                    <div className='form_change'>Bạn chưa có tài khoản, <Link to={"/register"}>
                        <button className='form_change-btn'>Đăng ký ngay</button>
                        </Link> </div>
                </form>
            </div>
          </div>
        </>
  )
}

export default LoginAuth
