import React from 'react';
import SmallCharts from './allSmallGraphs'
import ChartComponent from './bigChartsecond'
import Payments from './payments'
import PaymentSection from './paymentspage'
import Table from './Table'

export default function DashBoardContainer() {

  return (
    <>
      <div className="dashboard flex-1 min-h-full ">
        <div>
          <SmallCharts />
        </div>
        <div className=" flex  mt-4">
          <div className="bg-white pt-3 w-2/3 rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 buttonHolder">
              <div className="date">
                Today 5, Aug 2019
            </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <select className="selectdate rounded">
                    <option value="11-10">11 Nov - 10 Dec</option>
                    <option value="11-10">11 Jan - 10 Feb</option>
                  </select>
                </div>
                <button className="border border-gray-500 px-2 rounded ml-3 py-1 bg-gray-500">
                  {'<'}
                </button>
                <button className="border border-gray-500 px-2 rounded ml-3 py-1 bg-gray-500">
                  {'>'}
                </button>
              </div>
            </div>
            <div className="w-100" style={{ height: '300px' }}>
              <ChartComponent />
            </div>
          </div>

          <div className="flex-1 ml-1">
            <Payments />
          </div>


        </div>
        <section>
          <PaymentSection />
        </section>
        <Table></Table>
      </div>
    </>
  );
}
