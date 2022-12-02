import React, { Fragment, useEffect , useState} from 'react'
import axios from "axios";


const Home = (props) => {
  const [posts , setpost] = useState([]);
 
 
  const getData =  () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      const _posts = res.data;
      if (_posts && _posts.length > 0)
      setpost((oldVal) => [..._posts, ...oldVal]);
      // console.log(_posts)
    }, (err) => console.error(err))
  
  }

  useEffect(() => {
    getData();
    console.log('called', posts);
  }, [props]);

 // setTimeout(getData, 2000);

 const onDelete = () =>{
  console.log("deleted")

 }

  

  

  return (
    <div>
      <h1>Welcome to My Blogs</h1>
      <div className="grid">
      { 
       posts.length > 0 ? posts.slice(0,6).map((post, index) => {
          return(
            <div className="card mb-10" key={index}>
            <img src="https://joeschmoe.io//api/v1/random" alt="blank" />
            <h3>{post.title.slice(0, 15).toUpperCase()}</h3>
            <p>{post.body.slice(0,100)}</p>
            <button className="btn btn-primary btn-danger mb-2" onClick={onDelete}>Delete</button>
            <button className="btn btn-primary btn-success">Edit</button>
          </div>
          )
        }) : null
      }


      </div>
      
    </div>
  )
}

export default Home