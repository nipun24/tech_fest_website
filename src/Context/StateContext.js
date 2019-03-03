import React from 'react';

export default React.createContext({
    route: 'home',
    onRouteChange: route => {}
})