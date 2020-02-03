import React from 'react';

export default function PaymentsPage() {
    return (
        <>
            <h1>
                Payments
    </h1>
            <div>
                <div>
                    <span> Showing 20 out of 500 </span>
                    <span> <input placeholder=" search " type="search" /> </span>
                    <span> Show <span> 
                        <select name="" id="">
                            <option value="All">All</option>
                            <option value="Unreconciled">Unreconciled</option>
                            <option value="Reconciled">Reconciled</option>
                            <option value="unsettled">Unsettled</option>
                            <option value="Settled">Settled</option>
                        </select>
                    </span>
                    </span>
                </div>
            </div>

        </>
    );
}
