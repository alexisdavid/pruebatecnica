import React from 'react'
import Button from "react-bootstrap/Button";
export const SearchBar = ({handleClick}) => {
  return (
    <div>
        <input type="text" className="form-control" />
        <Button variant={'primary'} onClick={handleClick}>
       Buscar
        </Button>
    </div>
  )
}
