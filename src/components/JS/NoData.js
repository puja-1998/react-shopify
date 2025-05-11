import React from 'react'

function NoData({data:{emoji,mssg1,mssg2}}) {
  return (
    <div  style={{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center", backgroundImage:`url("https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9nZ3klMjBmb3Jlc3R8ZW58MHx8MHx8&w=1000&q=80")`,backgroundSize:"cover"}}>
      <div className='no-data' style={{textAlign:"center",ackgroundColor:"whitesmoke",boxShadow:"0px 0px 10px red",borderRadius:"5px",height:"80%",width:"50%",padding:"2%",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center", backgroundImage:`url("https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9nZ3klMjBmb3Jlc3R8ZW58MHx8MHx8&w=1000&q=80")`,backgroundSize:"cover"}}>
        <img src={emoji} height="200px" width="200px" alt="emoji" loading='lazy'/>
        <p style={{fontSize:"300%",color:"red"}}>{mssg1}</p>
        <p style={{fontSize:"200%",color:"grey"}}>{mssg2}</p>
      </div>
    </div>
  )
}

export default NoData
