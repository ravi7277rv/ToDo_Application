import React from 'react'

const EditModal = ({  caption, setCaption, description, setDescription, setEditModal, hnadleSubmitUpdate }) => {

    
    return (
        <div className='editModal'>
            <div className="hnadleSubmitUpdate">
                <h3>Update The TODO Task</h3>
                <span onClick={() =>setEditModal(false)}>X</span>
            </div>

            <form onSubmit={hnadleSubmitUpdate} className='updatetodo'>
                <input
                    type="text"
                    value={caption}
                    placeholder='Enter ToDo Caption'
                    onChange={(e) => setCaption(e.target.value)}
                />
                <input
                    type="text"
                    value={description}
                    placeholder='Enter Description'
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input type="submit" value={"Update"} />
            </form>

        </div>
    )
}

export default EditModal
