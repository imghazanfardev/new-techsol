import React from 'react'
import Div from '../Div'
import './logolist.scss'


export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/simplysolar.png', 
      alt:'Partner'
    },
    {
      src: '/images/bigpoppa.png', 
      alt:'Partner'
    },
    {
      src: '/images/handsofgrace.png', 
      alt:'Partner'
    },
    {
      src: '/images/equistic.png', 
      alt:'Partner'
    },
    {
      src: '/images/nocohockey.png', 
      alt:'Partner'
    }
  ]
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index)=><div className="cs-partner_logo" key={index}><img src={partnerLogo.src} alt={partnerLogo.alt} /></div>)}
    </Div>
  )
}
