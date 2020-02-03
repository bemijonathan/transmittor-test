import React, { useState } from 'react';

export default function Payments() {
    const [Orders] = useState([
        {
            title: "Orders",
            pending: 20,
            reconciled: 80,
            Total: 100
        },
        {
            title: "Payments",
            pending: 20,
            reconciled: 80,
            Total: 100
        }
    ])

    return (
        <>
            {
                Orders.map((e, i) => {
                    return (
                        <div key={i} className=" bg-white payment rounded shadow px-5" style={{height:"100%", display:'grid', alignContent:"center", fontSize:"14px", fontFamily:"Segoe UI"}}>
                            <h2 className="mb-2"><b>{e.title}</b></h2>
                            <div className="progressbars">
                                <div className="progress">
                                    <div className="progress-value"></div>
                                </div>
                            </div>
                            <p>
                                Pending {e.title === 'Orders' ? 'Orders' : 'Payments'} : <span className="text-yellow-700 font-black"> <b>{e.pending} </b> </span> 
                            </p>
                            <p>
                                Reconciled {e.title === 'Orders' ? 'Orders' : 'Payments'} : <span className="text-green-700 font-black"> <b> {e.reconciled  } </b></span>
                            </p>
                            <p>
                                Total {e.title === 'Orders' ? 'Orders' : 'Payments'} : <span className="text-blue-700 font-black"> <b> {e.Total}  </b> </span> 
                            </p>
                        </div>
                    )
                })
            }
        </>
    );
}
