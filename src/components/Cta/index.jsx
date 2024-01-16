import React from 'react'
import './cta.scss'
import Button from '../Button';
import Div from '../Div';
import Spacing from '../Spacing';

export default function Cta({title, btnText, btnLink, bgSrc, variant}) {
  return (
    <Div className={`cs-cta cs-style1 cs-bg text-center cs-shape_wrap_1 cs-position_1 ${variant?variant:''}`} style={{backgroundImage: `url(${bgSrc})`}}>
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-cta_in">
        <h2 className="cs-cta_title cs-semi_bold cs-m0">Hello</h2>
        <p>Skip the wait and connect with us to get an immediate road map of your next achievement!</p>
        {btnText && (
          <>
            <Spacing lg='70' md='30' />
            <Button 
              btnLink={btnLink}
              btnText={btnText}
            />
          </>
        )}
      </Div>
    </Div>
  )
}
