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
                        <div key={i} className=" bg-white mb-1 payment rounded-lg px-3" style={{height:"49%", display:'grid', alignContent:"center"}}>
                            <h2 className="mb-2"><b>{e.title}</b></h2>
                            <div className="progressbars">
                                <div className="progress">
                                    <div className="progress-value"></div>
                                </div>
                            </div>
                            <p>
                                Pending {e.title === 'Orders' ? 'Orders' : 'Payments'} : {e.pending}
                            </p>
                            <p>
                                Reconciled {e.title === 'Orders' ? 'Orders' : 'Payments'} : {e.reconciled}
                            </p>
                            <p>
                                Total {e.title === 'Orders' ? 'Orders' : 'Payments'} : {e.Total}
                            </p>
                        </div>
                    )
                })
            }
        </>
    );
}
