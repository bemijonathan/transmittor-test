import React from 'react';

export default function PaymentsPage() {
    return (
        <>
            <h1 className="payment-header">
                Payments
    </h1>
            <div style={{fontSize:"13px", fontFamily:"Segoe UI"}}>
                <div className="flex items-center justify-between">
                    <span> Showing 
                        <select className="mx-5">
                            <option value="20">20</option>
                            <option value="10">10</option>
                            <option value="10">10</option>
                            <option value="8">8</option>
                            <option value="6">6</option>
                        </select>
                          out of 500 Payments
                    </span>
                    <span className="flex-1 mx-10"> 
                        <input placeholder = " search " type="search..." className="w-full bg-transparent border-b border-black outline-none" style={{height:"28px"}} /> </span>
                    <span> <span className="mr-3">Show </span> <span> 
                        <select name="" id="" className="show bg-white px-3">
                            <option className="px-3 show" value="All">All</option>
                            <option className="px-3 show" value="Unreconciled">Unreconciled</option>
                            <option className="px-3 show" value="Reconciled">Reconciled</option>
                            <option className="px-3 show" value="unsettled">Unsettled</option>
                            <option className="px-3 show" value="Settled">Settled</option>
                        </select>
                    </span>
                    </span>
                </div>
            </div>

        </>
    );
}
