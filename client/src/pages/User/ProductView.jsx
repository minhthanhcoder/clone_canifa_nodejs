import React from 'react'
import Header from '../../components/layouts/users/Header'
import Footer from '../../components/layouts/users/Footer'
import { NavLink } from 'react-router-dom'

function ProductView() {
  return (
    <> 
    <Header/>
     <div className='product-view_container'>
         <h2 className='product-view_title text-center text-3xl text-slate-800 border-b-2 pb-2 mb-2'>Chi tiết sản phẩm</h2>
         <NavLink to={"/"} className='bg-slate-500 px-4 py-2 rounded-lg  text-white hover:opacity-60'>Quay lại</NavLink>
       <div className='product-view_body'>
       <div>
       <img className='product-img' src="https://canifa.com/img/1000/1500/resize/1/l/1ls22w017-sg480-130-1-ghep.webp"/>
       </div>
       <div className='product-infomation'>
         <h3 className='text-2xl font-medium'>Áo cardigan nỉ nam</h3>
         <p className='mb-10'>Mã sp:6BP23W004</p>
         <div className='text-3xl font-medium text-red-600 my-3'>{Number(1000000).toLocaleString("en")} ₫</div>
         <div>
         <p>Màu sắc:</p>
         <div className='flex justify-center border-2'>
           <div className=' m-3 h-10 w-10 rounded-full border-2 border-white shadow-md bg-cyan-400 cursor-pointer'></div>
           <div className=' m-3 h-10 w-10 rounded-full border-2 border-white shadow-md bg-white cursor-pointer'></div>
           <div className=' m-3 h-10 w-10 rounded-full border-2 border-white shadow-md bg-black cursor-pointer'></div>
         </div>
         <div className='mt-10'>
         <p>Kích cỡ:</p>
         <div className='flex justify-center text-center items-center border-2'>
           <button className=' m-3 h-10 w-10 border-1 border-gray-300 '>S</button>
           <button className=' m-3 h-10 w-10 border-1 border-gray-300 '>M</button>
           <button className=' m-3 h-10 w-10 border-1 border-gray-300 '>L</button>
           <button className=' m-3 h-10 w-10 border-1 border-gray-300'>XL</button>
         </div>
         <div className='mt-10'>
           <button className='bg-gray-700 text-white rounded-sm p-3 font-medium w-full my-2 hover:opacity-70'>Mua ngay</button>
           <button className='bg-red-500 text-white rounded-sm p-3 font-medium w-full my-2 hover:opacity-70'>Thêm vào giỏ hàng</button>
         </div>
         </div>
         </div>
       </div>
       </div>
     </div>
     <Footer/>
    </>
  )
}

export default ProductView
