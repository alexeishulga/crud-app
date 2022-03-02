import React from 'react'

const Button = ({onClick, label, classes, disabled}) => {
  return (
    <button disabled={disabled} onClick={onClick} className="btn btn-success mt-3">
        {label}
    </button>
  )
}

export default Button