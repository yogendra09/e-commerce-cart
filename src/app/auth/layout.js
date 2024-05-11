"use client"
import Nav from '@/components/Nav'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const layout = ({children}) => {
  const router = useRouter();
  const {isAuthenticated} = useSelector((state)=>state.userReducer);
  useEffect(()=>{
    if(!isAuthenticated){
      router.push('/login');
    }
  },[isAuthenticated])
  return (
    <div>
      <Nav/>
      {children}
      </div>
  )
}

export default layout