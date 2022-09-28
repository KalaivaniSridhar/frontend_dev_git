import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../Utils/Constants'

const Header = ({ selectedCategory, moreOption }) => {
  return (
    <>
      <Typography variant='h5' fontWeight="bold">
        <span> {selectedCategory} </span>
      </Typography>

      {Navbar.map((Navbar) =>
        Navbar.name === 'Logout' ? <Link to='/login'>
          <button
            onClick={() => {
            }}
            className='header-btn'
            style={{
              background: '#6941C6',
              float: 'right',
              color: 'white'
            }}
            key={Navbar.name}

          >
            <span>{Navbar.icon}</span>
            <span>{Navbar.name}</span>
          </button>
        </Link> :
          <button
            onClick={() => {
              moreOption('Add')
            }}
            className='header-btn'
            style={{
              background: '#6941C6',
              float: 'right',
              color: 'white'
            }}
            key={Navbar.name}

          >
            <span>{Navbar.icon}</span>
            <span>{Navbar.name}</span>
          </button>

      )
      }
    </>
  )
}

export default Header