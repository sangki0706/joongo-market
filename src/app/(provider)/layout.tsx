import React, { PropsWithChildren } from 'react'
import AuthProvider from './_provider/AuthProvider'

function ProvidersLayout({ children }: PropsWithChildren) {
  return (
    <>
        <AuthProvider>{children}</AuthProvider>
    </>
  )
}

export default ProvidersLayout