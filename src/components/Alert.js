import React, { useEffect } from 'react'

function Alert({ alert, setAlert }) {

  const { type, msg } = alert;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ isOn: false, type: '', msg: '' })
    }, 2500)

    return () => {
      clearTimeout(timeout);
    }
    // eslint-disable-next-line
  }, [alert])

  return (
      <div className={`alert ${type}`}>
        <p className="alert-msg">{msg}</p>
      </div>
  )
}

export default Alert