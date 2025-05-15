import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        {children}
    </div>
  )
}

export default Layout