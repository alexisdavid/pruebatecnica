import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
export const SearchBar = ({handleSearch}) => {

  return (
    <div>
        <input type="text" placeholder='Escribe para buscar...' className="form-control" onChange={e=>handleSearch(e.target.value)} />
    </div>
  )
}
