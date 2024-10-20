import './App.css';
import React, { useState, useEffect, useMemo } from 'react';
import { Container, Divider, Grid } from '@mui/material';
import { Header, Home, TopMenu, About, Portfolio, Blog, Error, ProjectDetailed, BlogDetailed } from './components';
import theme from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Routes, Route, Navigate } from "react-router-dom";
import { INITIAL_PAGE } from './constants.js';
import { useDispatch } from 'react-redux';
import { getBlogs } from './actions/blogs'; // Assuming you have an action to fetch blogs
import { getProjects } from './actions/projects'; // Assuming you have an action to fetch projects

const PAGE_ROUTES = {
  'home': {
      path: '/',
      component: <Home />
  },
  "about": {
      path: '/about',
      component: <About />
  },
  "portfolio": {
    path: '/portfolio',
    component: <Portfolio/>
  },
  "blog" : {
    path : '/blog',
    component : <Blog/>
  },
  "error": {
    path: '/error',
    component: <Error />
  }
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs()); // Dispatching action to fetch blogs
    dispatch(getProjects()); // Dispatching action to fetch projects
  }, [dispatch]);

  // Load initial dark mode preference from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true'; // Return true for dark mode, false for light mode
  });

  // Handle dark mode toggle and store preference in localStorage
  const handleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  const currentTheme = useMemo(() => theme(darkMode ? 'dark' : 'light'), [darkMode]);


  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div className='App'>
        <Header toggleDarkMode={handleDarkMode} />
        <Container>
          <Grid container spacing={currentTheme.custom.mainContainer.spacing}>
            <Grid item xs={12} md={12}>
              <TopMenu initialMenuItem={INITIAL_PAGE} routes={PAGE_ROUTES} />
            </Grid>
            <Grid item xs={12} md={12} marginBottom={2}>
              <Routes>
                {Object.keys(PAGE_ROUTES).map((page) => (
                  <Route key={page} path={PAGE_ROUTES[page].path} element={PAGE_ROUTES[page].component} />
                ))}
                <Route path="*" element={<Navigate to="/error" />} /> {/* Redirect invalid routes to the error page */}
                <Route path="/portfolio/:projectId" element={<ProjectDetailed />} />
                <Route path="/blog/:blogId" element={<BlogDetailed />} />
              </Routes>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;