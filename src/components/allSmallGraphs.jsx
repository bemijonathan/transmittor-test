import React,{useState} from 'react';
import SmallChart from "./smallChart"

export default function SmallGraphs() {

    const [detials] = useState([
        {name:"one", title:"Daily Transaction Volume", value:"2,342"},
        {name:"two", title:"Daily Transaction Value", value:"200,000"},
        {name:"three", title:"Daily Transaction Volume", value:"4,300"},
        {name:"four", title:"Daily Transaction Value", value:"2,000,000"}
    ])

  return (
    <>
    <div className="flex -m-2">
        {
            detials.map((e, i) => {
                return (
                    <div key={i} className="p-3 w-1/4">
                        <SmallChart values={e}></SmallChart>
                    </div>
                )
            })
        }
    </div>
        
    </>
  );
}
