import React, { useState, useContext, useRef } from "react";
import { Button, Form, Alert } from 'react-bootstrap'

import { MyContext } from '../context/index'

const Stage1 = () => {
  const textInput = useRef()
  const context = useContext(MyContext)
  const [error, setError] = useState([false, ''])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = textInput.current.value
    const validate = validateInput(value)

    if(validate){
      // form is valid add player
      setError([false,''])
      context.addPlayer(value)
      textInput.current.value = ''
    }
  }

  const validateInput = (value) => {
    if(value === ''){
      setError([true, 'Sorry, you need to add something'])
      return false
    }
    if(value.length <= 2){
      setError([true, 'Sorry, you need 4 characters'])
      return false
    }
    return true
  }

  console.log(context)

  return (
    <>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group>
          <Form.Control
            type='text'
            placeholder="Add player name"
            name='player'
            ref={textInput}
          />
        </Form.Group>

        { error[0] ?
         <Alert variant="danger" className="mt-2 p-2">
          {error[1]}
         </Alert>
        : null}
        
        <Button className="coal mt-2" variant='primary' type='submit'>
          Add player
        </Button>
        {
          context.state.players && context.state.players.length > 0 ?
            <>
              <hr/>
              <div>
                <ul className="list-group">
                  { context.state.players.map((item, idx) => (
                    <li key={idx} className='list-group-item d-flex justify-content-between align-items-center list-group-item-action mb-1 rounded-3'>
                      {item}
                      <span
                        className="badge badge-danger border"
                        onClick={() => context.removePlayer(idx)}
                      >
                        X
                      </span>
                    </li>
                  ))
                  
                  }
                </ul>
                <div
                  className="action_button rounded-3"
                  onClick={ () => context.next() }
                >
                  NEXT
                </div>
              </div>
            </>
          :null

        }
      </Form>
    </>
  );
}

export default Stage1;
