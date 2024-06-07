import React from 'react'
import {useState} from 'react';
import axios from '../../axiosInstance.js';
import './style.scss';

function Post() {
    const [Company,setCompany] = useState('');
    const [Type,setType] = useState();
    const [Role,setRole] = useState();
    const [Content,setContent] = useState();
    const [Duration,setDuration] = useState();
    const [response, setResponse] = useState('');

    const handleSubmit = async () => {
        try {
            const postData = {
                "company": Company,
                "type": Type,
                "role": Role,
                "content": Content,
                "duration": Duration
            }
            const result = await axios.post('/post', postData);
            if (result.data.status==="success") {
                setResponse("Posted Successfully")
              }

        } catch (error) {
            console.error("There was an error posting the data!", error);
            setResponse('Error logging in');
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
          <label><input type="text" value={Company} placeholder='Company' onChange={(e) => setCompany(e.target.value)} required /></label><br />
          <label><input type="text" value={Type} placeholder='Internship/FTE' onChange={(e) => setType(e.target.value)} required /></label><br />
          <label><input type="text" value={Role} placeholder='Role' onChange={(e) => setRole(e.target.value)} required /></label><br />
          <label><textarea class='reviewbox' type="text" value={Content} placeholder='Write your Review' onChange={(e) => setContent(e.target.value)} required /></label> <br />       
          <label><input type="text" value={Duration} placeholder='Duration' onChange={(e) => setDuration(e.target.value)} required /></label><br />
        <br />
        <button class="red" type="submit">Post Review</button>
      </form>
      
        {response && <p>{response}</p>}
    </>
  )
}

export default Post