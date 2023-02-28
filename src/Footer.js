import React from 'react';
import './Footer.css'

const Footer = ({length}) => {
  return (
    <footer>
        <p className='copyright'>
            There are {length} {length === 1 | length === 0 ? 'item' : 'items'} in the list
        </p>
    </footer>
  )
}

export default Footer;