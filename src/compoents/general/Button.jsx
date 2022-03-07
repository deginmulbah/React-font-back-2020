import PropTypes from 'prop-types'
function Button({ children, type, version, isDisabled }) {
    return (
        <button type={type} className={`btn btn-${version}`}
        disabled={isDisabled}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isDisabled: false
}

Button.propsTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired
}
export default Button