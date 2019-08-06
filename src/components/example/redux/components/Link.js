import React from 'react'

const Link = ({ active, children, onClick }) => {
    if (active) return <span>{children}</span>
    return (
        <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            onClick={e => {
                e.preventDefault();
                onClick()
            }}>
            {children}
        </a >)
}

export default Link;