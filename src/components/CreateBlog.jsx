/*
    Error Handling to be done  vid at 6:43
*/

import React from 'react'
import { useState } from 'react';
import Editor from 'react-simple-wysiwyg';
import { useForm } from "react-hook-form"

const CreateBlog = () => {

  const [html, setHtml] = useState('my <b>HTML</b>');
  function onChange(e) {
    setHtml(e.target.value);
  }
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const formSubmit = (data) => {

  } 

  return (
    
    <div className="container mb-5">
        <div className="d-flex justify-content-between pt-5 mb-4">
            <h4>Create Blog</h4>
            <a href="/" className="btn btn-dark">Back</a>
        </div>

        <div className="card border-0 shadow-lg">
          <form onSubmit={handleSubmit(formSubmit)}>
          <div className="card-body">

          <div className="mb-3">
              <label className="form-label">Title</label>
              <input 
              {...register('title', {required: true})}
              type="text" className="form-control" placeholder="Name" />
          </div>

          <div className="mb-3">
              <label className="form-label">Short Description</label>
              <textarea 
              {...register('shortDesc')}
              className='form-control' cols="30" rows="5"></textarea>
          </div>

            <div className="mb-3">
              <label className='form-label'>Description</label>
              {/* <textarea className='form-control' name="" id="" rows='10' cols='30'></textarea> */}
              <Editor value={html} 
              containerProps={{ style: { height: '400px' } }}
              onChange={onChange} />
            </div>

            <div className="mb-3">
              <label className='form-label'>Image</label> <br/>
              <input type="file" />
            </div>

            <div className="mb-3">
              <label className="form-label">Author</label>
              <input 
              {...register('author', {required: true})}
              type="text" className="form-control" placeholder="Author" />
            </div>  

            <button className="btn btn-dark">Create</button>

          </div>
          </form>

        </div>
    </div>
  )
}

export default CreateBlog