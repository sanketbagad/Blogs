import React, { useState, useEffect } from 'react'
import  Layout  from '../Components/Layout'
import 'tailwindcss/tailwind.css'
import "../styles/global.scss"

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
     <Component {...pageProps} />
     </Layout>
     )
}

export default MyApp
