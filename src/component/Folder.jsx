import React, { useState } from 'react';
import "../app.css"

export default function Folder({explorer}) {
  console.log(explorer,"its")
  const [expand,setexpand]=useState(false);
  if (explorer.isFolder) {
      return (
    <div>
      <div className='floder' onClick={()=>setexpand(!expand)}>
        <span>📁{explorer.name}</span>
      </div>
      <div style={{paddingLeft:25,display:expand?"flex":"none"}} className='file'>
        {explorer.items.map((exp)=>{
          return(
            <Folder explorer={exp}/>
          )
        })}
      </div>
    </div>
  );
  }
  else{
    return <span>📃{explorer.name}</span>
  }

}
