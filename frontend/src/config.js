// config.js
const config = {
    api: {
        baseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5001',
    },
    paths: {
        projects: '/projects',
        blogs: '/blogs',
    },
    port: process.env.PORT || 5001,
};

export default config;
