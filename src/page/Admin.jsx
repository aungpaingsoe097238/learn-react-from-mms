import React from 'react'
import { Navigate } from 'react-router-dom'

const Admin = () => {
    if(localStorage.getItem("token")){
      return (
        <div>
          Hello Admin
        </div>
      )
    }else {
      return <Navigate to={-1} />
    }
}

export default Admin