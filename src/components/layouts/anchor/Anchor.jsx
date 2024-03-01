import React from 'react'

const Anchor = ({link, name}) => {
    return (
        <a href={link}>{name}</a>
    );
};

export default Anchor;