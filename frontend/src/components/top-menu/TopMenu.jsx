import { Container, ListItemButton, ListItemText, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import './TopMenu.css';  // Import the CSS for the top menu
import { Link, useLocation } from 'react-router-dom';

function TopMenu({ initialMenuItem, routes }) {
    const theme = useTheme();
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
        <Container sx={{
            width: '100%', height: 'auto', padding: 2,
            paddingX: { xs: 1, sm: 2 }, // No horizontal padding on xs screens
        }}>
            <Box
                sx={{
                    display: 'flex', // Ensure flexbox layout for horizontal alignment
                    justifyContent: 'center', // Space out the items
                }}
            >
                {menuList.map((item, index) => {
                    const isSelected = selectedMenuItem === item;
                    return (
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
                                    fontSize: {
                                        xs: isSelected ? theme.custom.menuItem.fontSize.selected.xs : theme.custom.menuItem.fontSize.xs,
                                        sm: isSelected ? theme.custom.menuItem.fontSize.selected.sm : theme.custom.menuItem.fontSize.sm,
                                    },
                                    color: isSelected ? theme.palette.primary.main : theme.custom.menuItem.color.default,
                                    '&:hover': {
                                        color: isSelected ? theme.palette.primary.main : theme.custom.menuItem.color.hover,
                                    },
                                }}
                            />
                        </ListItemButton>
                    );
                })}
            </Box>
        </Container>
    );
}

export { TopMenu };