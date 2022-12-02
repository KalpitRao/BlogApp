import React from 'react'

const AddPost = () => {
  return (
    <div>
        <h1>Add Post Here</h1>
        <form>
  <div className="form-group">
    <input type="file" /><br>
    </br>
    <label for="exampleInputTitle">Title</label>
    
    <input type="text" className="form-control" id="exampleInputTitle" aria-describedby="TitleHelp" placeholder="Enter Title"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input type="text" className="form-control" id="exampleInputText" placeholder="Text"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddPost