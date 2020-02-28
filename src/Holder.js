import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './holder.scss'

const Holder = ({ name, muerte }) => {
// const Holder = (props) => {
    // const { name } = props

    const [tiempo, setTiempo] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
          if(tiempo >= 5){
            muerte(name)
          } else {
            setTiempo(tiempo + 1)
          }
       }, 1000) 

       return () => {
           clearInterval(interval)
       }

    }, [muerte, name, tiempo])

    return (
        <div className="paciente-cero">

            <div className="corona-virus" draggable>
                <img src={require('./corona.jpg')} alt="corona"/>
                <p>{name}</p>
            </div>
        </div>
    )
}

Holder.defaultProp = {
    sexualidad: 'apache elicopter'
}

Holder.propTypes = {
    name: PropTypes.string.isRequired,
    muerte: PropTypes.func.isRequired,
    sexualidad: PropTypes.string
}

export default Holder
// export { Holder }
