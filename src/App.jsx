import * as React from 'react';
import { RouterConfig } from './Router/RouterConfig';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './components/error/ErrorFallBack';
import Loading from './components/Loading';
import SignIn from "./pages/auth/SignIn";

function App() {
    return (
        // エラーバウンダリー
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
            <RouterConfig />
            {/* <Loading /> */}
            {/* <SignIn /> */}
        </ErrorBoundary>
    )
}

export default App
