import { Container, ListItemButton, ListItemText, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
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
        <Container sx={theme.custom.topMenu.container}>
            <Box sx={theme.custom.topMenu.box}>
                {menuList.map((item, index) => {
                    const isSelected = selectedMenuItem === item;
                    return (
                        <ListItemButton
                            key={index}
                            onClick={() => handleMenuItemClick(item)}
                            sx={theme.custom.topMenuItem.button}
                            component={Link}
                            to={`${routes[item].path}`}
                        >
                            <ListItemText
                                primary={item}
                                disableTypography
                                sx={{
                                    ...theme.custom.topMenuItem.text,
                                    fontSize: isSelected ? theme.custom.topMenuItem.text.fontSize.selected : theme.custom.topMenuItem.text.fontSize,
                                    fontStyle: isSelected ? theme.custom.topMenuItem.text.fontStyle.selected : theme.custom.topMenuItem.text.fontStyle,
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