import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Todoitem(props) {
  return (
    <>
      <div className="Todo-Wrapper">
        {props.task.map((item, index) => {
          return (
            <>
              <div className="Todo-List">
                <p key={index}>{item}</p>
                <MdDeleteForever
                  className="delete-button"
                  onClick={() => {
                    props.DeleteItem(index);
                  }}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Todoitem;
