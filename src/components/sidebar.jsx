import React, { useState } from 'react';

export default function SideBAr() {

  const [menu] = useState([
    { image: '/images/wallet.png', text: 'All Payments' },
    { image: '/images/reconcile payments.png', text: 'Reconciled Payments' },
    { image: '/images/unreconciled.png', text: 'Un - Reconciled Payements' },
    { image: '/images/manual.png', text: 'Manual Settlement' }
  ])

  const [orders] = useState([
    { image: '/images/orders.png', text: 'All Orders' },
    { image: '/images/pending.png', text: 'Pending Orders' },
    { image: '/images/reconciled.png', text: 'Reconciled Orders' }
  ])
  return (
    <>
      <div className="sidebar fixed h-full overflow-scroll">
        <button className="px-5 text-white py-2">
          Generate invoice
        </button>
        <div className="Text"> Main </div>

        <div className="active route">
          <img src="/images/menu1.png" alt="" className="inline mr-3" /> Overview
        </div>

        <div className="Text">
          Payments
        </div>

        {menu.map((e, i) => {
          return (
            <div key={i} className="route flex items-center">
              <img src={e.image} className="inline mr-3" alt="" /> {e.text}
            </div>
          )
        })}

        <div className="Text"> Orders</div>

        {orders.map((e, i) => {
          return (
            <div key={i} className="route">
              <img src={e.image} className="inline mr-3" alt=""/> {e.text}
            </div>
          )
        })}


      </div>
    </>
  );
}
