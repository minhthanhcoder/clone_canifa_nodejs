import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux"

function ListProducts() {
 const [listPro, setListPro] = useState([])
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
  
//   useEffect(()=>{
//     instance.get("/api/v1/products")
//     .then((pro)=>setListPro(pro.data.data))
//     .catch(err=>console.log(err)
//     )
//   },[])

//   const handleFindOne = async (id) => {
//     const product = await getOneProducts(id)
//     console.log("vao dispatch");
//     await dispatch(productSlice.actions.getOnePro(product))
//     navigate("/product-view")
//   }
  return (
    <>
   <div>
{/* Bộ sưu tập mùa Đông*/}
<div className="main bg-black min-h-screen">
    <h2 className='text-center p-6 font-semibold text-2xl text-zinc-50'>BST Thu đông 2023</h2>
  <div className="bg-white mx-8">
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
      
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <NavLink to={"/product-view"} className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
        </NavLink>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
              alt="Olive drab green insulated bottle with flared screw lid and flat top."
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
              alt="Person using a pen to cross a task off a productivity paper card."
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
              alt="Hand holding black machined steel mechanical pencil with brass tip and top."
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">
            Machined Mechanical Pencil
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
              alt="Hand holding black machined steel mechanical pencil with brass tip and top."
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">
            Machined Mechanical Pencil
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
              alt="Hand holding black machined steel mechanical pencil with brass tip and top."
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">
            Machined Mechanical Pencil
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
              alt="Hand holding black machined steel mechanical pencil with brass tip and top."
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">
            Machined Mechanical Pencil
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        
      </div>
    </div>
  </div>

    </div>

   </div>
    </>
  )
}


export default ListProducts
