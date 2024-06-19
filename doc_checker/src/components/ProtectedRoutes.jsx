import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InvalidAccess from '../Pages/InvalidAccess'
import { ROLES } from '../Constants'
import { setUser } from '../redux/slicer'

function ProtectedRoutes({ Component, allowCustomer, allowExpert, allowAdmin }) {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user)
    let sessionUser = JSON.parse(sessionStorage.getItem('userInfo'))
    const dispatch = useDispatch()


    useEffect(() => {
        console.log(user)
        if(!user?.accessToken) {
            if(sessionUser?.accessToken) {
                dispatch(setUser(sessionUser))
            } else {
                navigate('/login')
            }
           
        } else {
            if ((user.role === ROLES.CUSTOMER && !allowCustomer) || 
                (user.role === ROLES.EXPERT && !allowExpert) ||
                (user.role === ROLES.ADMIN && !allowAdmin)) {
                navigate('/invalid-access')
            }
        }
    })

    const hasAccess = user?.accessToken && (
        (user.role === ROLES.CUSTOMER && allowCustomer) ||
        (user.role === ROLES.EXPERT && allowExpert) ||
        (user.role === ROLES.ADMIN && allowAdmin)
    );

  return (
    <>
        {hasAccess ? Component : <InvalidAccess />}
    </>
  )
}

export default ProtectedRoutes