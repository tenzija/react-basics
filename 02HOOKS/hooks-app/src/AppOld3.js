import React, { useState, useEffect } from "react";
import Post from "./post";

const App = ({intialCount}) => {
  
  //first method//
  //const [count, setCount] = useState(intialCount)
  
  //second method//
  const [state, setState] = useState({
    count: intialCount,
    user: 'Francis'
  })

  let [posts, setPosts] = useState([
    {
      name: 'Super awesome post',
      body: 'The content of the post'
    },
    {
      name: 'JS is great',
      body: 'Something else'
    },
    {
      name: 'React is great',
      body: 'Hello world yyyy//mm//dd'
    }
  ])

  const subOne = () => {
    setState({
      ...state, 
      count: state.count - 1
      })
  }

  const addOnePost = () => {
    let newPost = {
      name: 'PHP is still awesome',
      body: 'Something about PHP'
    }
    
    setPosts([
      ...posts, newPost
    ])
  }

  const removePosts = () => {
    setPosts([])
  }
  
  useEffect(() => {
   // console.log('change on state')
  }, [state])

  useEffect(() => {
   // console.log('change on posts')
  }, [posts])

  useEffect(() => {
    //console.log('mounted')
  }, [])

  return (
    <>
      <h1>{state.user}</h1>
      <h3>Count: {state.count}</h3>
      <button
        onClick={ () => setState({
          ...state, 
          count: state.count + 1
          }) }
      >
        Add one +1
      </button>
      <button
        onClick={ removePosts }
      >
        REMOVE POSTS
      </button>
      <br/>
      <button
        onClick={ subOne }
      >
        Pop one -1
      </button>
      <button
        onClick={ () => setState({...state, count: intialCount}) }
      >
        RESET
      </button>
      
      <hr/>

      { posts.map((item, i) => (
        <Post
          item={item}
          key={i}
        />
      )) }

      <button
        onClick={addOnePost}
      >
        Add one more
      </button>

    </>
  );
}

export default App;
