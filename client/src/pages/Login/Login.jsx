import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, provider } from '../../firebase/firebase.config'

function Login() {
    const navigate = useNavigate()
    //login by google
    const handleLoginByGoogle = () => {
        signInWithPopup(auth, provider)
        .then((res)=> {
            const userLogin = {
                userName: res.user.displayName,
                email: res.user.email,
                image: res.user.photoURL,
                userId: res.user.uid
            }
            localStorage.setItem("isLogin", JSON.stringify(userLogin))
             navigate("/")
        }
        )
        .catch(err=>console.log(err))
    }
  return (
    <>
    <div
 className="relative z-10 form-main"
 aria-labelledby="modal-title"
 role="dialog"
 aria-modal="true"
>
 
 <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
 <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
   <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    
     <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
       <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
         <div className="sm:flex sm:items-center flex justify-center items-center">
           
           <div>
             <h3
               className="text-base font-semibold leading-6 text-gray-900 text-lg flex justify-center items-center"
               id="modal-title"
             >
               Đăng nhập vào <span className='mx-3'><img src="https://canifa.com/assets/images/logo.svg" alt="logo" /></span>
             </h3>
             <div className="mt-2">
               <ul>
                 <Link to = {"/login-auth"}>
                 <li className='flex my-4 p-3 hover:bg-red-500 hover:text-white rounded-lg shadow-md'>
                   <span className='h-8 mx-6' ><i  className="fa-regular fa-user"></i></span>
                   Sử dụng Số điện thoại / Email</li>
                 </Link>

                <Link to = {"/"}>
                <li className='flex my-4 p-3 hover:bg-red-500 hover:text-white rounded-lg shadow-md'>
                   <span>
                     <img  
                     className='h-8 mx-4' 
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" 
                     alt="logo" />
                     </span>
                   Tiếp tục với Facebook</li>
                </Link>

               <Link to={"/"}>
               <li onClick={handleLoginByGoogle} className='flex my-4 p-3 hover:bg-red-500 hover:text-white rounded-lg shadow-md'>
                   <span><img  
                   className='h-8 mx-4' 
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" 
                   alt="logo" />
                   </span>
                   Tiếp tục với Google</li>
               </Link>
                 
               </ul>
             </div>
           </div>
         </div>
       </div>
       <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
         <Link to = {"/"}> 
         <button
           type="button"
           className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
         >
           Trở lại
         </button>
         </Link>
       </div>
     </div>
   </div>
 </div>
</div>

   </>
  )
}

export default Login
