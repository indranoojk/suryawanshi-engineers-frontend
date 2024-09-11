import React, { useEffect, useState } from 'react'
import { baseUrl } from '../Urls';
import Popular from './Popular';

const ProjectCollection = () => {

    const [popular, setPopular] = useState([]);

    const fetchInfo = () => { 
        fetch(`${baseUrl}/api/project/allprojects`) 
                .then((res) => res.json()) 
                .then((data) => setPopular(data))
        }
    
        useEffect(() => {
          fetchInfo();
        }, [])

  return (
    <>
      <Popular data={popular} />
    </>
  )
}

export default ProjectCollection
