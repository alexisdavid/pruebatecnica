import React from 'react'

export const index = () => {
  return (
     <div className="d-flex justify-content-between">
            {showButton && (
              <Button variant={variantButton} onClick={handleClick}>
                {textButton}
              </Button>
            )}
           <div className="d-flex justify-content-between">
            <div className="pr-3">

           <FontAwesomeIcon icon={faHeart} color={'red'} />&nbsp;
            </div>
            <div>
            <FontAwesomeIcon icon={faStar} color={'orange'}/>
            <FontAwesomeIcon icon={faStar} color={'orange'}/>
            <FontAwesomeIcon icon={faStar} color={'orange'}/>
            <FontAwesomeIcon icon={faStarHalfStroke} color={'orange'} />
            </div>
           </div>

            </div>
  )
}
