import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../Utils/Constants'
import { Link } from 'react-router-dom';
const Sidepanel = ({ selectedCategory, setSelectedCategory }) => {

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) =>
      (

        <Link to={category.route}>
          <button
            className='category-btn'
            onClick={() => setSelectedCategory(category.name)}
            style={{
              background: category.name === selectedCategory && '#ddd',
              color: category.name === selectedCategory && '#6941C6'
            }}
            key={category.name}

          >

            <span style={{ marginRight: '15px' }}>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        </Link>
      ))}
    </Stack>
  )
}

export default Sidepanel