import React from 'react'

export const ErrorFallBack = ({error}) => {
    return (
        <div>
            <h2>エラーが発生しました</h2>
            <pre>{error.message}</pre>
        </div>
    )
}
