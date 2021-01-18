import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { Form, Col, Button } from "react-bootstrap";




function GetGiph() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const[visible, setVisible]=useState(10)
  


  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "iavb4Np5rT7R2ZPsOWPR4pO4irE7ncZc",
            limit: 100,
          },
        });
        console.log(results);
        setData(results.data.data);
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 40000);
        console.log(err);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);
  const renderGifs = () => {
    if (isLoading) {
      return <Loader />;
    }
    return data.slice(0,visible).map(el=> {
      return (
          <Col>
        <div key={el.id} className="gif">
          <img src={el.images.fixed_height.url} />
          
        </div>
        
        </Col>
        
      );
    })
    ;
  };
  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Unable to load gifs,please try again in a few minutes
        </div>
      );
    }
  };
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsError(false);
    setIsLoading(true);

    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search	", {
        params: {
          api_key: "iavb4Np5rT7R2ZPsOWPR4pO4irE7ncZc",
          q: search,
          limit: 100,
        },
      });
      setData(results.data.data);
     
    } catch (err) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }

    setIsLoading(false);
  };

 const showMoreData=()=>{
     setVisible((prevValue)=> prevValue +5);
 }

  return (
    <div className="m-2">
      {renderError()}
      <Form className="form-inline justify-content-center m-2">
        <input
          value={search}
          onChange={handleSearchChange}
          type="text"
          placeholder="search"
          className="form-control"
        />
        <Button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary mx-2"
        >
          Search
        </Button>

      </Form>
      

     
      <div className="container gifs">{renderGifs()}</div>
      <Button onClick={showMoreData}>Load More</Button>
        
      
    </div>
    
  );
}

export default GetGiph;