import PropTypes from 'prop-types';
import React from "react"

const Heading = React.memo(function ({ label }) {
    return (
        <div className="font-bold pt-3 text-4xl">
            {label}
        </div>
    )
})

Heading.displayName = 'Heading';
Heading.propTypes = {
    label: PropTypes.string.isRequired, // Validate that onClick is a function and required
};
export default Heading