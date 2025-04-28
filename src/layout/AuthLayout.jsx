import React, { memo } from 'react';
import { AuthNavigator } from '../navigation/AppNavigation';

const AuthLayout = memo(() => {
    return (
        <AuthNavigator/>
    );
});

export default AuthLayout;