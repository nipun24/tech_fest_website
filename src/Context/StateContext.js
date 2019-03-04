import React from 'react';

export default React.createContext({
    user: {
        name: '',
        email: '',
        password: ''
    },
    onRegister: () => {}

})