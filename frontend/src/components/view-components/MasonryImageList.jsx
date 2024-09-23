import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Stack, ListItem} from '@mui/material';

function MasonryImageList() {
  return (
    <Box sx={{ width: '100%', height: '50%', overflowX: 'scroll', padding: 0 }}>
      <ImageList variant="masonry" cols={5} gap={16} sx={{ padding: 0 }}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', // Add shadow
              transition: 'box-shadow 0.2s ease-in-out', // Smooth transition for shadow
              '&:hover': {
                boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.3)', // Increase shadow on hover
                transform: 'scale(1.05)', // Increase size on hover
              },
            }}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Tower',
  },
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  }
];

export {MasonryImageList}