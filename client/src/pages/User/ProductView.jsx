import React, { useEffect, useState } from 'react'
import Header from '../../components/layouts/users/Header'
import Footer from '../../components/layouts/users/Footer'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "jquery";



function ProductView() {
  const data = useSelector((pro)=> pro.products.productView)
  const [size, setSize] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [modal, setModal] = useState(false)
  console.log(modal);
  const imgs = [
    {imgId:1, value: data[0].Image},
    {imgId:2, value: data[0].Images2},
    {imgId:3, value: data[0].Images3},
    {imgId:4, value: data[0].Images4},
    {imgId:5, value: data[0].Images5},
    {imgId:6, value: data[0].Images6},
    {imgId:7, value: data[0].Images7},
    {imgId:8, value: data[0].Images8},
  ]
  const filteredData = [];
  for (const item of imgs) {
    if (item.value !== null) {
      filteredData.push(item);
    }
  }
  const [slider,setSlider] = useState(imgs[0])


  // handle change image
  const handleChangeImage = (i)=> {
    setSlider(imgs[i]);
  }
  const currentIndex = filteredData.findIndex((i)=> i.imgId === slider.imgId)

  // next and prev slider
  const handelPrevImage = ()=> {
    if(currentIndex == 0) {
      setSlider(filteredData[filteredData.length-1])
    }else {
      setSlider(imgs[currentIndex-1])
    }
    
  }
  const handelNextImage = ()=> {
    if(currentIndex === filteredData.length-1) {
      setSlider(imgs[0])
    }else {
      setSlider(imgs[currentIndex+1])
    }

  }


  const isLogin = JSON.parse(localStorage.getItem("isLogin"))
// add cart
  const handleAddCart = (id) => {
    // check login
    if (isLogin) {
      // add cart
      console.log("vào is Login");
    }else {
      // login
      setModal(true)
    }
  }
  return (
    <> 
    <Header/>
     {/* <!-- Modal --> */}
     {modal? <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>: (<div className='product-view_container'>
         <h2 className='product-view_title text-center text-3xl text-slate-800 border-b-2 pb-2 mb-2'>Chi tiết sản phẩm</h2>
         <NavLink to={"/"} className='bg-slate-200 px-4 py-2 rounded-lg  text-black hover:opacity-60'>Quay lại</NavLink>
       <div className='product-view_body'>
       <div className='img-body'>
        {/* image */}
       <img className='product-img' src= {slider.value}/>
       {/* slide images */}
       <div className='flex justify-center'>
        <button onClick={handelPrevImage}><i className="fa-solid fa-arrow-left p-2"></i></button>
        {filteredData.map((data,idx)=>
        <img className= {currentIndex === idx ? "active:m-2 h-14 w-12 cursor-pointer border-red-600 border-2 " : 'm-2 h-14 w-12 cursor-pointer'} 
        key={data.idx} 
        src = {data.value} 
        onClick={()=>handleChangeImage(idx)}
        />
        )}
        <button onClick={()=>handelNextImage()}><i className="fa-solid fa-arrow-right p-2"></i></button>
       </div>
       </div>
       {/* produuct name */}
       <div className='product-infomation'>
         <h3 className='text-2xl font-medium'>{data[0].ProductName}</h3>
         
         <div className='text-3xl font-medium text-red-600 my-3'>{Number(data[0].Price).toLocaleString("en")} ₫</div>
         <div>
    {/* product size */}
         <div className='mt-10'>
         <p>Kích cỡ:</p>
         <div className='flex justify-center text-center items-center border-2'>
           <button onClick={()=>setSize("S")} className=' m-3 h-10 w-10 border-1 border-gray-300  '>S</button>
           <button onClick={()=>setSize("M")} className=' m-3 h-10 w-10 border-1 border-gray-300 '>M</button>
           <button onClick={()=>setSize("L")} className=' m-3 h-10 w-10 border-1 border-gray-300 '>L</button>
           <button onClick={()=>setSize("XL")}  className=' m-3 h-10 w-10 border-1 border-gray-300'>XL</button>
         </div>
         </div>
         {/* quantity */}
         <div className='mt-10'>
         <p>Số lượng:</p>
         <div className='flex justify-center text-center items-center'>
           <button onClick={()=>setQuantity(quantity-1)} className=' h-10 w-10 border-1 border-gray-300  '>-</button>
           <input defaultValue={1} value={quantity} className='text-center h-10 w-10 border-1 border-gray-300 '/>
           <button onClick={()=>setQuantity(quantity+1)} className=' h-10 w-10 border-1 border-gray-300 '>+</button>
           
         </div>

         
         {/* navigate */}
         <div className='mt-10'>
           <button className='bg-gray-700 text-white rounded-sm p-3 font-medium w-full my-2 hover:opacity-70'>Mua ngay</button>
           <button onClick={()=>handleAddCart(data[0].ProductId)} className='bg-red-500 text-white rounded-sm p-3 font-medium w-full my-2 hover:opacity-70'>Thêm vào giỏ hàng</button>
         </div>
         </div>

         </div>
       </div>
       </div>
     </div>) }
     
     <Footer/>
    

    </>
  )
}

export default ProductView
