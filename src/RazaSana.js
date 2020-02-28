import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RazaSana = ({ name, contagio }) => {

    function handleOnDrop(e) {
        e.preventDefault()
        console.log(`ya te cargo la peda ${name}`)
        contagio(name)
    }  

    function handleOnDragOver(e) {
        e.preventDefault()
    }


    return (
        <RazaSanaContainer onDragOver={handleOnDragOver} onDrop={handleOnDrop}>
            <p>{name}</p>
        </RazaSanaContainer>
    )
}
RazaSana.propTypes = {
    name: PropTypes.string.isRequired,
    contagio: PropTypes.func.isRequired,
    sexualidad: PropTypes.string
}
const RazaSanaContainer = styled.div`
  height: 254px;
  width: 254px;
  border: 1px solid gray;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RazaSana