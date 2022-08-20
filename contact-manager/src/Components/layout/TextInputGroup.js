import React from 'react'

export const TextInputGroup = ( {
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
} ) => {

    const classValue = error ? 'is-invalid form-control form-control-lg':'form-control form-control-lg';

  return (
    <div className='form-group'>
        <label htmlFor= "name">{label}</label>

        <input 
            type={type}
            name={name}
            className={classValue}
            placeholder={placeholder}
            value = {value}
            onChange= {onChange}
        />

        {error && <div className='invalid-feedback'>{error}</div> }


    </div>
  )
}
