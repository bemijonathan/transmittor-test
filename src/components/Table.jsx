import React, { useState } from 'react';

export default function Table() {

  const [state] = useState([
    {}
  ])
  return (
    <>
      <table className="text-left mt-4 w-full" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{color:"#7F8FA4"}}>
            <th style={{background:"#EAEEF0"}} className="py-4 px-6 rounded text-center font-sans font-medium text-sm border-b border-grey-light">Item type</th>
            <th style={{background:"#EAEEF0"}} className="py-4 px-6 rounded text-center font-sans font-medium text-sm border-b border-grey-light">Price</th>
            <th style={{background:"#EAEEF0"}} className="py-4 px-6 rounded text-center font-sans font-medium text-sm border-b border-grey-light">Transaction Number</th>
            <th style={{background:"#EAEEF0"}} className="py-4 px-6 rounded text-center font-sans font-medium text-sm border-b border-grey-light">Date</th>
            <th style={{background:"#EAEEF0"}} className="py-4 px-6 rounded text-center font-sans font-medium text-sm border-b border-grey-light">Status</th>

          </tr>
        </thead>
        <tbody style={{fontSize:"14px"}}>
          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light flex items-center">
              <div style={{width:"36px", height:"36px", borderRadius:"18px", fontSize:"12px"}} className=" text-white bg-gray-500 flex items-center justify-center">
                VW 
              </div> <span className="ml-5 text-black">Apple Macbook 15" 250 SSD 12GB</span>
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">$7800</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">1234567890</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">12:30</td>
            <td className="py-4 px-6 border-b border-grey-light text-center flex"> 
              <button className="border border-yellow-600 rounded-lg flex items-center mr-2 justify-center" style={{width: '120px',fontSize:"13px",height: '33px', borderRadius:'30px'}}> 
               <div className="ball mr-3">
              </div>  Pending
              </button>
              <button className="p-2 text-lg ml-10" style={{lineHeight:1,  transform: "rotate(90deg)"}}>
                  >
              </button>
            </td>
          </tr>

          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light flex items-center">
              <div style={{width:"36px", height:"36px", borderRadius:"18px", fontSize:"12px"}} className=" text-white bg-gray-500 flex items-center justify-center">
                VW 
              </div> <span className="ml-5 text-black">Apple Macbook 15" 250 SSD 12GB</span>
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">$7800</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">1234567890</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">12:30</td>
            <td className="py-4 px-6 border-b border-grey-light text-center flex"> 
              <button className="border border-yellow-600 rounded-lg flex items-center mr-2 justify-center" style={{width: '120px',fontSize:"13px",height: '33px', borderRadius:'30px'}}> 
               <div className="ball mr-3">
              </div>  Pending
              </button>
              <button className="p-2 text-lg ml-10" style={{lineHeight:1,  transform: "rotate(90deg)"}}>
                  >
              </button>
            </td>
          </tr>

          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light flex items-center">
              <div style={{width:"36px", height:"36px", borderRadius:"18px", fontSize:"12px"}} className=" text-white bg-gray-500 flex items-center justify-center">
                VW 
              </div> <span className="ml-5 text-black">Apple Macbook 15" 250 SSD 12GB</span>
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">$7800</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">1234567890</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">12:30</td>
            <td className="py-4 px-6 border-b border-grey-light text-center flex"> 
              <button className="border border-yellow-600 rounded-lg flex items-center mr-2 justify-center" style={{width: '120px',fontSize:"13px",height: '33px', borderRadius:'30px'}}> 
               <div className="ball mr-3">
              </div>  Pending
              </button>
              <button className="p-2 text-lg ml-10" style={{lineHeight:1,  transform: "rotate(90deg)"}}>
                  >
              </button>
            </td>
          </tr>

          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light flex items-center">
              <div style={{width:"36px", height:"36px", borderRadius:"18px", fontSize:"12px"}} className=" text-white bg-gray-500 flex items-center justify-center">
                VW 
              </div> <span className="ml-5 text-black">Apple Macbook 15" 250 SSD 12GB</span>
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">$7800</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">1234567890</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">12:30</td>
            <td className="py-4 px-6 border-b border-grey-light text-center flex"> 
              <button className="border border-yellow-600 rounded-lg flex items-center mr-2 justify-center" style={{width: '120px',fontSize:"13px",height: '33px', borderRadius:'30px'}}> 
               <div className="ball mr-3">
              </div>  Pending
              </button>
              <button className="p-2 text-lg ml-10" style={{lineHeight:1,  transform: "rotate(90deg)"}}>
                  >
              </button>
            </td>
          </tr>


          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light flex items-center">
              <div style={{width:"36px", height:"36px", borderRadius:"18px", fontSize:"12px"}} className=" text-white bg-gray-500 flex items-center justify-center">
                VW 
              </div> <span className="ml-5 text-black">Apple Macbook 15" 250 SSD 12GB</span>
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">$7800</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">1234567890</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">12:30</td>
            <td className="py-4 px-6 border-b border-grey-light text-center flex"> 
              <button className="border border-yellow-600 rounded-lg flex items-center mr-2 justify-center" style={{width: '120px',fontSize:"13px",height: '33px', borderRadius:'30px'}}> 
               <div className="ball mr-3">
              </div>  Pending
              </button>
              <button className="p-2 text-lg ml-10" style={{lineHeight:1,  transform: "rotate(90deg)"}}>
                  >
              </button>
            </td>
          </tr>

          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light flex items-center">
              <div style={{width:"36px", height:"36px", borderRadius:"18px", fontSize:"12px"}} className=" text-white bg-gray-500 flex items-center justify-center">
                VW 
              </div> <span className="ml-5 text-black">Apple Macbook 15" 250 SSD 12GB</span>
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">$7800</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">1234567890</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">12:30</td>
            <td className="py-4 px-6 border-b border-grey-light text-center flex"> 
              <button className="border border-yellow-600 rounded-lg flex items-center mr-2 justify-center" style={{width: '120px',fontSize:"13px",height: '33px', borderRadius:'30px'}}> 
               <div className="ball mr-3">
              </div>  Pending
              </button>
              <button className="p-2 text-lg ml-10" style={{lineHeight:1,  transform: "rotate(90deg)"}}>
                  >
              </button>
            </td>
          </tr>


          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light flex items-center">
              <div style={{width:"36px", height:"36px", borderRadius:"18px", fontSize:"12px"}} className=" text-white bg-gray-500 flex items-center justify-center">
                VW 
              </div> <span className="ml-5 text-black">Apple Macbook 15" 250 SSD 12GB</span>
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">$7800</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">1234567890</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">12:30</td>
            <td className="py-4 px-6 border-b border-grey-light text-center flex"> 
              <button className="border border-yellow-600 rounded-lg flex items-center mr-2 justify-center" style={{width: '120px',fontSize:"13px",height: '33px', borderRadius:'30px'}}> 
               <div className="ball mr-3">
              </div>  Pending
              </button>
              <button className="p-2 text-lg ml-10" style={{lineHeight:1,  transform: "rotate(90deg)"}}>
                  >
              </button>
            </td>
          </tr>

          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light flex items-center">
              <div style={{width:"36px", height:"36px", borderRadius:"18px", fontSize:"12px"}} className=" text-white bg-gray-500 flex items-center justify-center">
                VW 
              </div> <span className="ml-5 text-black">Apple Macbook 15" 250 SSD 12GB</span>
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">$7800</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">1234567890</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">12:30</td>
            <td className="py-4 px-6 border-b border-grey-light text-center flex"> 
              <button className="border border-yellow-600 rounded-lg flex items-center mr-2 justify-center" style={{width: '120px',fontSize:"13px",height: '33px', borderRadius:'30px'}}> 
               <div className="ball mr-3">
              </div>  Pending
              </button>
              <button className="p-2 text-lg ml-10" style={{lineHeight:1,  transform: "rotate(90deg)"}}>
                  >
              </button>
            </td>
          </tr>

          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light flex items-center">
              <div style={{width:"36px", height:"36px", borderRadius:"18px", fontSize:"12px"}} className=" text-white bg-gray-500 flex items-center justify-center">
                VW 
              </div> <span className="ml-5 text-black">Apple Macbook 15" 250 SSD 12GB</span>
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">$7800</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">1234567890</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">12:30</td>
            <td className="py-4 px-6 border-b border-grey-light text-center flex"> 
              <button className="border border-yellow-600 rounded-lg flex items-center mr-2 justify-center" style={{width: '120px',fontSize:"13px",height: '33px', borderRadius:'30px'}}> 
               <div className="ball mr-3">
              </div>  Pending
              </button>
              <button className="p-2 text-lg ml-10" style={{lineHeight:1,  transform: "rotate(90deg)"}}>
                  >
              </button>
            </td>
          </tr>
          
        </tbody>
      </table>


      <div className="flex justify-between mt-10 items-center">
        <div style={{fontSize:"13px"}}>
          <span> 1 to 10 of 500 entries </span>
        </div>

        <div className="pagination" style={{fontSize:"14px"}}>
          <button className="p-2 border rounded border-gray-500 px-3">Previous</button>
          <button className="p-2 border rounded border-gray-500 px-3" style={{background:"#1875F0"}}>1</button>
          <button className="p-2 border rounded border-gray-500 px-3">2</button>
          <button className="p-2 border rounded border-gray-500 px-3">Next</button>
        </div>
        
      </div>

    </>
  );
}
