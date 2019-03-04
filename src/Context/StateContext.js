import React from 'react';

export default React.createContext({
    user: {
        name: '',
        email: '',
        password: ''
    },
    isLoggedIn: false,
    onRegister: () => {},
    onLogin: () => {},
    onLogout: () => {}
})