import React from "react";

const TodoList = (props) => {

    return (
        <>
            <div className="listItems">
                <i class="fa fa-times-circle" aria-hidden="true"
                 onClick={()=>{
                     props.onSelect(props.id)
                 }}></i>
                <li>{props.text}</li>
            </div>
        </>
    )
}
export default TodoList;


// import React, { useState } from "react";

// const To2 = (props) => {
//     const [Line, setLine] = useState(false);
//     const cutIt=()=>{
//         setLine(true)
//     }
//     return (
//         <>
//             <div className="listItems">
//                 <i class="fa fa-times-circle" aria-hidden="true" onClick={cutIt}></i>
//                 <li style={{textDecoration: Line ? "line-through" : "none"}}>{props.text}</li>
//             </div>
//         </>
//     )
// }
// export default To2;
