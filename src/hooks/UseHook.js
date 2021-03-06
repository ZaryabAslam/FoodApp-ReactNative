import React, {useState, useEffect} from 'react'
import yelp from '../api/yelp';

export default ()=>{
    const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async newterm => {
    try{
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: newterm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    }
    catch{
      setErrorMessage('Something went wrong')
    }
  };

  useEffect(()=>{
    searchApi()
  }, [])
  return [searchApi, results, errorMessage]
}