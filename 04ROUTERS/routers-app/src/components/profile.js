import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Profile = (props) => {
  const [redir, setRedir] = useState(false)
  console.log(props)

  const redirect = () => {
    if(redir){
      // method 1 - most people use this one
      props.history.push('/')
      
      // method 2
      // return(
      //   <Redirect to='/'/>
      // )
    }
  }

  return (
    <>
      {redirect()}
      <Link to={{
          pathname:`${props.match.url}/posts`
      }}>
        posts of profile
      </Link>
      <hr/>
      <button
        onClick={() => setRedir(true)}
      >
        setRedir(TRUE)
      </button>
    </>
  );
}

export default Profile;
