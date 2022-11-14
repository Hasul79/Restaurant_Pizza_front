import React from 'react'

export default function Error({ error }) {
    return (
        <div>

            <div className="alert alert-warning" role="alert">
                {error}
            </div>
        </div>
    )
}
