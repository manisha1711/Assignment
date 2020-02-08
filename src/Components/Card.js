import React from 'react';

const person = (props) => {
    let {item,onDeleteClick,onEditClick,index} = props
    return (
            <div className="col-md-3 card">
                <img src={item.image_url} alt={item.name}/>
                <button type="button" className="close close-icon" aria-label="Close" onClick={()=>onDeleteClick(index)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <span className="glyphicon glyphicon-pencil edit-icon" data-toggle="modal" data-target="#imageModal" onClick={()=>onEditClick(index)}></span>
            </div>  
    )
}

export default person;