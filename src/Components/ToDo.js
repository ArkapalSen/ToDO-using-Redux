import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../Actions/Index";

const ToDo = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.TodoReducer.list);
  const [inputData, setInputData] = useState("");
  const [validate, setValidate] = useState(false);
  const [visibility, setVisibility] = useState("hidden");
  const [removeBtn, setRemoveBtn] = useState("hidden");

  // useEffect(() => {
  //     setVisibility('hidden')
  // }, [])

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here ✌️</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder=" ✍️ Add Items.. "
              value={inputData}
              onChange={(event) => {
                setInputData(event.target.value);
                if (event.target.value == "") {
                  setValidate(true);
                  setVisibility("hidden");
                } else {
                  setVisibility("visible");
                  setValidate(false);
                }
                // (event.target.value) == '' ? ()=>{setValidate(true) setVisibility('hidden') : ( setVisibility('none'));
              }}
            />

            {validate ? (
              <h5>Please Enter A ToDo</h5>
            ) : (
              <i
                className="fa fa-plus add-btn"
                style={{ visibility: visibility }}
                onClick={() =>
                  dispatch(
                    addTodo(inputData),
                    setInputData(""),
                    setRemoveBtn("visible")
                  )
                }
              ></i>
            )}

            {/* {validate ? setVisibility('hidden') : setVisibility('none') } */}

            {/* {validate ? null : (<i
              className="fa fa-plus add-btn" style = {{visibility : {visibility}}}
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>) }   */}
          </div>

          <div className="showItems">
          
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h1>{elem.data}</h1>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => dispatch(deleteTodo(elem.id))}
                  ></i>
                </div>
              );
            })}
            
            
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="remove All"
              onClick={() => dispatch(removeTodo(), setRemoveBtn("hidden") , setVisibility("hidden"))}
              style={{ visibility: removeBtn }}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
