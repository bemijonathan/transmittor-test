import React, { useState, useEffect } from 'react';


export const NavBar = () => {

  const [count, setstate] = useState(false)

  useEffect(() => {
    
  }, [count])


  document.addEventListener('scroll', e => {
    if(e.target.scrollingElement.scrollTop < 100){
      setstate(true)
    }else{
      setstate(false)
    }
  })


  return (
    <>
    <div  className={count ? '':'fixed top-0 w-full animate z-10'}>
      <nav className="bg-white p-3 flex w-100 justify-even shadow items-center"  >
        <h3 className="text-lg text-blue-400 header mr-20" > TransMittor </h3>
        <div className="flex-1 flex items-center">
          <img src="/images/search.png" alt="search" className="inline mx-4" />
          <input type="search" placeholder="search..." className="w-100 flex-1" />
        </div>
        <div className="flex list-none items-center justify-end flex-1">
          <div className="flex">
            <li className="mx-10"> Support </li>
            <li className="mx-10"> FAQ</li>
            <li className="mx-10"> <img src="/images/bell.png" alt="bell" className="inline" /></li>
          </div>

          <div className="flex items-center  ">
            <div>
              <span className="text-sm"> Hello </span>
              <p> OLuwajeke Ojo</p>
            </div>
            <div>
              <img src="/images/avatat.png" alt="avatar" width="40" className=" rounded-circle ml-3" style={{ borderRadius: '20px' }} />
            </div>
          </div>
        </div>
      </nav>
    
    </div></>
  );
}
