import * as React from 'react';
import { RouterConfig } from './Router/RouterConfig';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './components/error/ErrorFallBack';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

function App() {
    return (
        // エラーバウンダリー
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
            {/* <RouterConfig /> */}
            {/* <SignIn /> */}
            <SignUp />
        </ErrorBoundary>
    )
}

export default App
