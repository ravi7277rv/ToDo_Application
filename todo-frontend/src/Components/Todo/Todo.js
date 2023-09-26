import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Axios } from '../../util/Axios';
import { Modal } from '@mui/material';
import EditModal from './EditModal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = ({ data, fetchAllTodoLists, todos, setTodos }) => {

  const id = data._id

  const [isChecked, setIsChecked] = useState(data.completed);
  const [editModal, setEditModal] = useState(false);

  const [caption, setCaption] = useState(data.caption);
  const [description, setDescription] = useState(data.description);
  

  const handleCheckboxChange = async () => {

    const updatedStatus = !isChecked;

    await Axios.put(`/taskCompleted/${id}`, {
      completed: updatedStatus
    })
      .then((res) => {
        console.log(res);
        setIsChecked(updatedStatus);
      }).catch((error) => {
        console.log(error)
      })

  };

  const handleEditModal = () => {
    setEditModal(true);
  }

  const hnadleSubmitUpdate = async (e) => {
    e.preventDefault();

    const data = {
      caption,description
    }

    console.log(data);
    await Axios.put(`/updateTodoList/${id}`,data)
      .then((res) => {
        console.log(res);
        fetchAllTodoLists();
        setEditModal(false);
        toast.success(res.data.message)
      }).catch((error) => {
        console.log(error)
        toast.error(error.response.data.message);
      })

  };


  const handleDeleteTodo = async () => {

    await Axios.delete(`/deleteTodoList/${id}`)
    .then((res) => {
      console.log(res)
      let deletedData = res.data.data;
      let todosData = todos.filter((ele) =>  ele._id !==deletedData._id)
      setTodos(todosData);
      toast.success(res.data.message);
    }).catch((error) => {
      console.log(error)
      toast.error(error.response.data.message)
    })


  }

  return (
    <>
      {
        editModal &&
        <Modal
          open={editModal}
          onClose={(e) => setEditModal(false)}
          sx={{
            display: "fles",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <EditModal
            caption={caption}
            setCaption={setCaption}
            description={description}
            setDescription={setDescription}
            setEditModal={setEditModal}
            hnadleSubmitUpdate={hnadleSubmitUpdate}
          />
        </Modal>
      }

      <div className='tododiv'>
        <div className="conntent">
          <div className="checkedinput">
            <input
              type="checkbox"
              value={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="textvalue">
            <h4>{data.caption}</h4>
            <p>{data.description}</p>
          </div>
        </div>
        <div className="action">
          <EditIcon className='editIcon' onClick={() => handleEditModal(data._id)} />
          <DeleteIcon className='deleteIcon' onClick={handleDeleteTodo} />
        </div>

      </div>
    </>
  )
}

export default Todo
