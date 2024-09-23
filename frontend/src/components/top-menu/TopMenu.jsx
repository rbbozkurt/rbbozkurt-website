import { Container, ListItemButton, ListItemText, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './TopMenu.css';  // Import the CSS for the top menu
import { Link, useLocation } from 'react-router-dom';

function TopMenu({ darkMode = false, initialMenuItem, routes }) {
    const location = useLocation();
    const menuList = Object.keys(routes).filter(item => item !== 'error'); // Exclude the error page
    const [selectedMenuItem, setSelectedMenuItem] = useState(() => {
        const currentPath = location.pathname;
        const currentItem = menuList.find(item => routes[item].path === currentPath);
        return currentItem || initialMenuItem; // Default to the first menu item if no match is found
    });

    useEffect(() => {
        const currentPath = location.pathname;
        const currentItem = menuList.find(item => routes[item].path === currentPath);
        if (currentItem) {
            setSelectedMenuItem(currentItem);
        } else if (currentPath === routes.error.path) {
            setSelectedMenuItem(null); // Set to null if on the error page
        }
    }, [location.pathname, menuList, routes]);

    const handleMenuItemClick = (item) => {
        setSelectedMenuItem(item);
    };

    return (
        <Container disableGutters={true} sx={{
            width: '100%', height: 'auto', padding: 2,
        }}>
            <Box
                sx={{
                    display: 'flex', // Ensure flexbox layout for horizontal alignment
                    justifyContent: 'center', // Space out the items
                }}
            >
                {menuList.map((item, index) => (
                    <ListItemButton
                        key={index}
                        onClick={() => handleMenuItemClick(item)}
                        sx={{
                            flexShrink: 0, // Ensure that the items do not shrink
                            whiteSpace: 'nowrap' // Prevent text from wrapping
                        }}
                        component={Link}
                        to={`${routes[item].path}`}
                    >
                        <ListItemText
                            primary={item}
                            disableTypography
                            sx={{
                                textAlign: 'center',
                                fontFamily: 'Source Code Pro, monospace', // Monospace font for all text
                                fontSize: (selectedMenuItem === item) ? '1.8rem' : '1.4rem',
                                color: (selectedMenuItem === item) ? '' : '#6b6b6b',
                                '&:hover': {
                                    color: (selectedMenuItem === item) ? '' : '#FFC107',
                                }
                            }}
                        />
                    </ListItemButton>
                ))}
            </Box>
        </Container>
    );
}

export { TopMenu };