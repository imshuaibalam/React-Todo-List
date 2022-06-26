import React, { useState } from "react";
import "./index.css"
import TodoList from "./TodoList";

const App = () => {
    const [Input, setInput] = useState("");
    const [Items, setItems] = useState([]);
    // const [Del, setDel] = useState([""]);

    const onChange = (event) => {
        setInput(event.target.value)
    }
    const onClick = () => {
        setItems((oldItems) => {
            return [...oldItems, Input]
        })
        setInput("")
    }
    // const onClick = () => {
    //     setItems([...Items, Input])
    //     setInput("")
    // }
    const DelItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((cItem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>My To-<span className="do">Do</span> List</h1>
                    <br />
                    <input type="text" placeholder="Add new task" onChange={onChange} value={Input} />
                    <button onClick={onClick}>+</button>

                    <ol>
                        {Items.map((itemValue, index) => {
                            return <TodoList key={index} id={index} text={itemValue} onSelect={DelItem} />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;