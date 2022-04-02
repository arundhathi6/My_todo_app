import React from 'react';
import {useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import axios from "axios";
import "./Modal.css";
import { addTodo, getTodo} from "../redux/actions";
// import { Link } from "react-router-dom";
import "./Todo.css";
// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen,faTrash,faThumbsUp,faThumbsDown,faCalendarDay,faXmark} from "@fortawesome/free-solid-svg-icons";

//


function Todo() {
    const { dataz } = useSelector((store) => {
    return store.todos;
    });

    const [text,setText] =useState("");

    const [date1,setDate] =useState("");

    const [deleted,setDeleted] =useState("");

    const [updated,setUpdated] =useState("");

    const dispatch = useDispatch();

const datetop = new Date().toLocaleString();

    useEffect(() => {
        getFunc()
        }, [deleted,updated]);

  
    const getFunc = ()=>{
        axios.get("https://my-todo-react-app-01.herokuapp.com/todo")
      .then(({ data}) => {
        dispatch(getTodo(data));
        
       
      })
      .catch((error) => {
        console.log("error", error);
      });
    }
    // const toggleModal = () => {
    //   setModal(!modal);
    // };
    const [modal, setModal] = useState(false);
    // const { todoid } = useParams();
    const [txt, settxt] = useState();
    const [dt, setDt] = useState();
    const navigate = useNavigate();
    const [upt,setUpt] = useState(1)
    const [ide,setID] = useState(0)
 
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
   function popUpfun(ide){
    axios.patch(`https://my-todo-react-app-01.herokuapp.com/todo/${ide}`,{title:txt,date:dt})
    .then((upt) =>  setUpdated(upt));
   }

  
  return (
    <div id="full_div"> 
      <div>
     
        <p className="topdate">{datetop}</p>
      </div>
       <h1 className="h1tag">My Todo List </h1>  
        <div className="allthree">
    
<input
    className="inputdate"
    type="date"
    onChange={(e) => setDate(e.target.value)}
  />
      
    <input
    className="inputitem"
    type="text"
    placeholder="Enter Todo..."
    onChange={(e) => setText(e.target.value)}
  />

  <button
  className="buttonclick"
    onClick={() => {
    
      
            if((text=="") || (!date1)){
                window.confirm("Fill the todo task and set the date of completion!!!")
            }
          else{
        axios.post("https://my-todo-react-app-01.herokuapp.com/todo", {
           title: text,
           date:date1,
            status: false})
          .then((dataz) => {

           dispatch(addTodo(dataz));
           getFunc();
          });
    }}}
  >Add Todo</button>
   <button className="clr_btn" onClick={()=>{
    axios.delete("https://my-todo-react-app-01.herokuapp.com/todo").then((updated)=>setUpdated(updated))
  }}>Clear All</button>
   </div>
<div  className="tododetails" >
   <table>
 
     <tbody >
     {dataz.map((e) => (
       <tr className = "tr_class" key={e._id}>
         <td className="dtcolor"><FontAwesomeIcon icon={faCalendarDay}></FontAwesomeIcon>&ensp;{e.date}</td>
         <td className="tlcolor">{e.title}</td>
         <div id="flex_btn">
         <td><button className = "togitem" style={{ backgroundColor:e.status?"green":"magenta"}} onClick={()=>{
    e.status?axios.patch(`https://my-todo-react-app-01.herokuapp.com/todo/${e._id}`,{status:false})
    .then((res) => {
      getFunc()
    }):axios.patch(`https://my-todo-react-app-01.herokuapp.com/todo/${e._id}`,{status:true})
   .then((res) => {
     getFunc()
   })}}
  >{e.status? <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>: <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon>}</button></td>
    {/*
    */}
         <td> <button onClick={()=>{
        toggleModal()
        setID(e._id);
      
        }} className = "edititem" ><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></button></td>
         <td>  <button className = "delitem" onClick={() => {
axios.delete(`https://my-todo-react-app-01.herokuapp.com/todo/${e._id}`)
.then((del) =>  setDeleted(del))}}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button> </td>
       </div>

{/* <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> */}
       </tr>))}
     </tbody>
   </table>
   </div>

 {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <div className="allthree">
      <input
       className="inputitem_one"
        type="text"
        placeholder="change title"
        onChange={(e) => settxt(e.target.value)}
      />
      <input
    className="inputdate_one"
    type="date"
    onChange={(e) => setDt(e.target.value)}
  />
      <button className="updatebtn" onClick = {()=>{
  
  if((txt) && (dt)){
    console.log("ide",ide)
  popUpfun(ide)
  axios.patch(`https://my-todo-react-app-01.herokuapp.com/todo/${ide}`,{title:txt,date:dt})
  toggleModal()
  setUpdated(upt+1)
 
  }
  else if((!txt) || (!dt)){
    window.confirm("set the date of completion to continue..")
   }
      }}>Update</button>
      </div>

            <button className="close-modal" onClick={toggleModal}>
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
          </div>
        </div>
          )}

    </div>
  )
}

export default Todo