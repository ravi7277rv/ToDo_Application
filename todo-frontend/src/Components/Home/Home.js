import React, { useEffect, useState } from 'react';
import { Axios } from '../../util/Axios';
import Todo from '../Todo/Todo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {


    const [todos, setTodos] = useState([]);
    const [caption, setCaption] = useState("");
    const [description, setDescription] = useState("");



    const handleFormSubmit = async(e) => {

        e.preventDefault();
        const postData = {
            caption:caption,
            description:description
          };
         await Axios.post("/createTodo",postData)
         .then((res) => {
            console.log(res);
           let todo = res.data.data;
           setTodos([todo,...todos]);
           toast.success(res.data.message);
           setCaption("");
           setDescription("");
         })
         .catch((error) => {
            console.log(error)
            toast(error.response.data.message)
         })
        

    };


    const fetchAllTodoLists = async() => {
        
        await Axios.get("/fetchTodoList")
        .then((response) => {
            console.log(response);
            setTodos(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {

        fetchAllTodoLists();

    },[])

    return (
        <div className='container'>
            <div className="row">
                <div className="column">
                    <div className="createTodo">
                        <form onSubmit={handleFormSubmit} className='form'>
                            <h3>Create Todo Lists</h3>
                            <div className="caption">
                                <label htmlFor="caption">Todo Caption : </label>
                                <input 
                                type="text" 
                                placeholder='Enter todo caption'
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                                required
                                />
                            </div>
                            <div className="description">
                                <label htmlFor="description">Description : </label>
                                <textarea 
                                color='80'
                                rows={5}
                                type="text" 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                placeholder='Enter todo description'
                                />
                            </div>
                            <div className="button">
                                <input type="submit" value="Add Todo" />
                            </div>
                        </form>
                    </div>
                    <div className="displayTodo">
      
                        <h2>ToDo Tasks List</h2>
                        {
                            todos && todos.map((data) => (
                                <Todo key={data._id} data={data} fetchAllTodoLists={fetchAllTodoLists} todos={todos} setTodos={setTodos} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
