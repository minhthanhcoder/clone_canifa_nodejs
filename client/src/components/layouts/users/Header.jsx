import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"



function Header() {
 const data = localStorage.getItem("isLogin")
  const isLogin = data?  JSON.parse(data) : null
  const navigate = useNavigate()
  const handleLogOut = () => {
   localStorage.removeItem("isLogin")
   navigate("/")
  }
   
  const [modal, setModal] = useState(false)
  
  const handleToggleModal = ()=> {
    setModal(!modal)
  }

  return (
    <>
     <header className='flex justify-between bg-white shadow h-14 text-center items-center fixed top-0 left-0 right-0 z-10'>
     <Link to={"/"}>
     <div className='cursor-pointer'><img src="https://canifa.com/assets/images/logo.svg" alt="logo" /></div>
     </Link>
      <div className='bg-zinc-50 rounded-md h-8 flex items-center border border-red-500 ' >
        <input className='outline-none  rounded-md px-2' type="text" />
        <span><i className="text-red-700 px-2 cursor-pointer fa-solid fa-magnifying-glass"></i></span>
      </div>
      <div className='flex justify-between items-center'>
        <div onClick={()=>handleToggleModal()} className='relative'><i className="bg-transparent text-red-700 font-semibold cursor-pointer hover:opacity-50 py-2 px-4 border border-red-500 hover:border-transparent rounded fa-solid fa-cart-shopping mx-2 "></i>
        <div className='rounded-full bg-red-700 w-6 text-white absolute -top-2 -left-1'>1</div>
        </div>
        
        <div className='relative'><i className="bg-transparent text-red-700 font-semibold cursor-pointer hover:opacity-50 py-2 px-4 border border-red-500 hover:border-transparent rounded fa-solid fa-bell mx-2"></i>
        <div className='rounded-full bg-red-700 w-6 -top-2 -left-1 text-white absolute'>0</div>
        </div>
      {isLogin === null ? <>
        <div className='flex justify-center items-center mx-2'>
            <Link to={"/login"}>
            <button 
            className='bg-transparent text-red-700 font-semibold  py-2 px-4 border border-red-500 hover:border-transparent rounded mx-2'>
              Đăng nhập</button>
            </Link>
        </div>
      </> : <>
      <div>
      <div className='user-profile'>
          <img 
          className='h-8 w-8 mr-3 cursor-pointer hover:opacity-50 rounded-full' 
          src=  {isLogin.image? isLogin.image : "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"}  alt="profile" />
        <ul className='user-profile-list shadow-md'>
          <li className='bg-transparent hover:opacity-50 text-red-700 font-semibold  py-2 px-4 border border-red-500 hover:border-transparent rounded'>Thông tin cá nhân</li>
          <li className='bg-transparent hover:opacity-50 text-red-700 font-semibold  py-2 px-4 border border-red-500 hover:border-transparent rounded'>Tài khoản thanh toán</li>
          <li className='bg-transparent hover:opacity-50 text-red-700 font-semibold  py-2 px-4 border border-red-500 hover:border-transparent rounded'>Đổi mật khẩu</li>
          <li onClick={()=>handleLogOut()} className='bg-transparent hover:opacity-50 text-red-700 font-semibold  py-2 px-4 border border-red-500 hover:border-transparent rounded'>Đăng xuất</li>
        </ul> 
        </div>
      </div>
      </>}
      </div>
      {/* cart */}
     {modal? <>
      <div onClick={handleToggleModal} className='fixed top-0 right-0 left-0 bottom-0 bg-slate-500 backdrop-blur-sm bg-opacity-30 z-10 flex justify-end items-start '>
        <div onClick={e => e.stopPropagation()} className='modal-container h-full 2xl:1/4 xl:w-1/3 md:w-1/2 sm:w-1/2 bg-white '>
          <div className='relative flex justify-center items-center '>
            {/* close btn */}
          <div className='absolute top-1 left-0 cursor-pointer text-lg p-3  text-white rounded-full hover:opacity-60' onClick={handleToggleModal} >
            <i className="fa-solid fa-arrow-right"></i>
            </div>
          {/* header */}
          <div className='text-center font-black bg-slate-400 w-full text-2xl p-3'>Giỏ Hàng</div>
          </div>
          {/* content */}
          <div className='overflow-y-auto h-3/4 p-3'>
            {/* product item */}
          <div className='product_item h-25 w-full border-b-2 flex justify-start text-center relative'>   
            <img className='h-full w-auto' src="https://canifa.com/img/210/300/resize/1/t/1th22w002-cr125-1-thumb.webp" alt="" />
            <p className='absolute top-0 left-0 cursor-pointer bg-gray-300 px-1'>x</p>
            <div className='m-3'>
              <h2 className="product_name font-medium p-1">Áo sơ mi bé gái cotton dài tay họa tiết kẻ</h2>
              <div className='flex justify-between m-2'>
                <p>Màu: Đỏ</p>
                <p>Size: 130</p>
              </div>
              <div className='flex justify-between items-center m-2'>
                <p className="price font-medium">304.000 đ</p>
               <div>
                  <button className='w-8 border'>-</button>
                  <input className='text-center w-8 border'  defaultValue={1} type="text" />
                  <button className='w-8 border'>+</button>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* footer */}
          <div className='fixed bottom-0 p-3 h-30 2xl:1/4 xl:w-1/3 md:w-1/2 sm:w-1/2 bg-slate-200 '>
            <div className='flex justify-evenly text-slate-900 p-2 font-medium'><p>Tổng cộng :</p> <p>5.400.000 vnđ</p></div>
            <div className='flex justify-evenly  text-3xl bg-red-600 font-extrabold text-white p-2 cursor-pointer hover:opacity-70 rounded-md'>Thanh Toán</div>
            </div>
        </div>
      </div>
      </> : null
     }
     </header>
    </>
  )
}

export default Header
