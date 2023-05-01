import * as React from 'react';
import { RouterConfig } from './Router/RouterConfig';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './components/error/ErrorFallBack';

function App() {
    return (
        // エラーバウンダリー
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
            <RouterConfig />
        </ErrorBoundary>
    )
}

export default App
