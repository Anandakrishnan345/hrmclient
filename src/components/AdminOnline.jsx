import React from "react";
import { Link } from "react-router-dom";
import Adminimage from"./images/man.png"
function AdminOnline(){
    return(
        <>
        <div className="ctn" style={{ margin: "auto", display: "flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"3px" }}>
          <img src={Adminimage} alt="" width={80} style={{paddingTop:"10px"}}/>
          <h2 style={{marginTop:"-5px"}}>Admin</h2>
        <Link to={"/adduser"} ><button>Adduser</button></Link>
        <Link to={"/getuser"} ><button>Getuser</button></Link>
        </div>
        </>
      
        
    )
}
export default AdminOnline