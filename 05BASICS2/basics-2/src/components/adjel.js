import React from "react";
//import { Link } from "react-router-dom";

const Adjel = () => {

    // const ids = [
    //     {id:'1', name:'Post1'},
    //     {id:'2', name:'Post2'},
    //     {id:'3', name:'Post3'}
    // ]

    // old method
    // const list = ids.map(item => (
    //     <span key={item.id}>
    //         <Link to={item.id}>
    //             {item.name}
    //         </Link>
    //         <br/>
    //     </span>
    // ))

    // return ids.map(item => (
    //     <span key={item.id}>
    //         <Link to={item.id}>
    //             {item.name}
    //         </Link>
    //         <br/>
    //     </span>
    // ))

    return [
        <div key='1'>
            Hello
        </div>,
        <div key='2'>
            I am
        </div>,
        <div key='3'>
            a react app
        </div>
    ]
}

export default Adjel