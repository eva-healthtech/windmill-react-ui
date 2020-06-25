import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'

function HelperText({ children, valid, className }) {
  const { helperText } = useContext(ThemeContext) || defaultTheme

  const baseStyle = helperText.base
  const validStyle = helperText.valid
  const invalidStyle = helperText.invalid

  function hasValidation(valid) {
    return valid !== undefined
  }

  function validationStyle(valid) {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle
    }
  }

  const cls = classNames(baseStyle, validationStyle(valid), className)

  return <span className={cls}>{children}</span>
}

HelperText.propTypes = {
  children: PropTypes.element,
  valid: PropTypes.bool,
  className: PropTypes.string,
}

export default HelperText