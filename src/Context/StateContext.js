import React from 'react';

export default React.createContext({
    user: {
        name: '',
        email: '',
        password: ''
    },
    status: "flase",
    message: '',
    open: false,
    snackbarMessage: () => {},
    onRegister: () => {},
    onLogin: () => {},
    onLogout: () => {}
})