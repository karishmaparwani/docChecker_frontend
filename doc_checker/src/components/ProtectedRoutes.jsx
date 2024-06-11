import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InvalidAccess from '../Pages/InvalidAccess'
import { ROLES } from '../Constants'

function ProtectedRoutes({ Component, allowCustomer, allowExpert }) {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user)

    useEffect(() => {
        console.log(user)
        if(!user.accessToken ) {
            navigate('/login')
        } else {
            if ((user.role === ROLES.CUSTOMER && !allowCustomer) || 
                (user.role === ROLES.EXPERT && !allowExpert)) {
                navigate('/invalid-access')
            }
        }
    })

    const hasAccess = user?.accessToken && (
        (user.role === ROLES.CUSTOMER && allowCustomer) ||
        (user.role === ROLES.EXPERT && allowExpert)
    );

  return (
    <>
        {hasAccess ? Component : <InvalidAccess />}
    </>
  )
}

export default ProtectedRoutes