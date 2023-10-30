import React from 'react'

function Footer() {
  return (
    <>
    <footer className="footer flex justify-center bg-black">
      
      <div className="footer-about m-5 text-white">
       <div className='bg-slate-500 rounded-lg m-3 p-3'>
       <h2>Các nền tảng khác của shop: </h2>
      <div className='flex justify-evenly items-center'> 
        <a href='' ><img className='xl:h-10 lg:h-8 md:h-5 sm:h-4  m-3 cursor-pointer hover:opacity-60 ' src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png" alt="facebook" /></a>
        <a href=''><img className='xl:h-10 lg:h-8 md:h-5 sm:h-4  m-3 cursor-pointer hover:opacity-60' src="https://static.vecteezy.com/system/resources/previews/016/716/450/non_2x/tiktok-icon-free-png.png" alt="titok" /></a>
        <a href=''><img className='xl:h-10 lg:h-8 md:h-5 sm:h-4  m-3 cursor-pointer hover:opacity-60' src="https://lucas.vn/wp-content/uploads/2023/08/logo-shopee.png" alt="shoppe" /></a>
        <a href=''><img className='xl:h-10 lg:h-8 md:h-5 sm:h-4  m-3 cursor-pointer hover:opacity-60' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png" alt="youtube" /></a>
       </div>
       </div>
      </div>

      <div className="footer-about m-5 text-white">
       <div className='bg-slate-500 rounded-lg m-3 p-3'>
       <h2>CÔNG TY CỔ PHẦN CANIFA</h2>
        <p>Số ĐKKD: 0107574310, ngày cấp: 23/09/2016, Nơi cấp: Sở Kế hoạch và đầu tư Hà Nội <br />
Địa chỉ trụ sở tại số 688 Đường Quang Trung, Phường La Khê, Quận Hà Đông, Thành phố Hà Nội. <br />
Địa chỉ liên hệ: P301, tầng 3, tòa nhà GP Invest, số 170 La Thành, Phường Ô Chợ Dừa, Quận Đống Đa, Thành Phố Hà Nội. <br />
Điện thoại: +8424 - 7303.0222 <br />
Fax: +8424 - 6277.6419 <br />
Email: hello@canifa.com</p>
       </div>
      </div>
    </footer>
  </>
  )
}

export default Footer
