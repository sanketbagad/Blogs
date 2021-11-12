import React from 'react'
import { Header } from "./index"

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Layout
