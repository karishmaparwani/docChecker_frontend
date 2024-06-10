import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InvalidAccess from '../Pages/InvalidAccess'

function ProtectedRoutes({ Component, allowCustomer, allowExpert }) {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user)

    useEffect(() => {
        console.log(user)
        if(!user.accessToken ) {
            navigate('/login')
        } else {
            if ((user.role === 'customer' && !allowCustomer) || 
                (user.role === 'moderator' && !allowExpert)) {
                navigate('/invalid-access')
            }
        }
    })

    const hasAccess = user?.accessToken && (
        (user.role === 'customer' && allowCustomer) ||
        (user.role === 'moderator' && allowExpert)
    );

  return (
    <>
        {hasAccess ? Component : <InvalidAccess />}
    </>
  )
}

export default ProtectedRoutes