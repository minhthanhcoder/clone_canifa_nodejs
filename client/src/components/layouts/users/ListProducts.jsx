import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { instance } from '../../../api/instance'
import {useDispatch} from "react-redux"
import ProductView from '../../../pages/User/ProductView'
import { productSlice } from '../../../redux/productSlice/productSlice'

function ListProducts() {
 const [listPro, setListPro] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(()=>{
    instance.get("/api/v1/products")
    .then((pro)=>setListPro(pro.data.data))
    .catch(err=>console.log(err)
    )
  },[])
  

  const handleFindOne = async (id) => {
   console.log(id);
   await instance.get(`/api/v1/products/${id}`)
   .then((pro)=> dispatch(productSlice.actions.productView(pro.data.data)))
   .catch(err=>console.log(err))
   navigate("/product-view")
    }
  return (
    <>
   <div>
{/* Bộ sưu tập mùa Đông*/}
<div className="main bg-black min-h-screen">
    <h2 className='text-center p-6 font-semibold text-2xl text-zinc-50'>BST Thu đông 2023</h2>
  <div className="bg-white mx-8">
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
      
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {listPro.map(pro=><div key={pro.ProductId} onClick={()=> handleFindOne(pro.ProductId)}  className="list-products_items group cursor-pointer">
            <div  className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={pro.Image}
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <p className="mt-1 text-lg font-medium text-gray-900">{Number(pro.Price).toLocaleString()}đ</p> 
            <h3 className="mt-2 text-sm text-gray-700">{pro.ProductName}</h3>
        </div>
        )}
      </div>
    </div>
  </div>

    </div>

   </div>
    </>
  )
}


export default ListProducts
