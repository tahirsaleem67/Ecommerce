import React from 'react'
import {
  FaTextHeight,
  FaCamera,
} from "react-icons/fa";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import "./addCourse.css"

export const AddCourse = () => {

  let { register, handleSubmit, reset, formState: { errors }, } = useForm();


  function Course(data) {

    console.log(data);

    let meraForm = new FormData();
    meraForm.append("title", data.title)
    meraForm.append("description", data.description)
    meraForm.append("pic", data.pic[0])

    axios.post("/courses", meraForm).then((res) => {
      try {
        if (res) {
          toast.success("Course Added")
          reset()
        }
      } catch (e) {
        toast.error("Try Again")
      }
    })

  }

  return <>
    <div className='continer Add_course'>
      <div className='row mb-4'>
        <div className='col-lg-12 col-sm-12'>
          <h1 className='users_head'>Add Course Detail</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-sm-12'>
          <form onSubmit={handleSubmit(Course)}>
            <div className='row addcourse_form'>
              <div className='col-lg-6 col-sm-12 mb-5'>
                <div className='addCourse_detail d-flex'>
                  <div className='detail_icon'><FaTextHeight /></div>
                  <input  {...register('title', { required: true, maxLength: 35 })} type="text" placeholder='Title Here*' />
                </div>
                {errors.title && errors.title.type == 'required' ? <div className='error'>Title is required *</div> : null}
                {errors.title && errors.title.type == 'maxLength' ? <div className='error'>Title Length should be less than 36 characters</div> : null}

              </div>

              <div className='col-lg-6 col-sm-12'>
                <div className='addCourse_detail d-flex'>
                  <div className='detail_icon'><FaCamera /></div>
                  <input {...register('pic', { required: true })} type="file" placeholder='Title *' />
                </div>
                {errors.pic ? <div className='error'> Picture is required * </div> : null}

              </div>


            </div>
            <div className='row'>
              <div className='col-lg-12 col-sm-12 mb-3'>
                <textarea {...register('description', { required: true, maxLength: 100 })} className='textarea' placeholder='Description *'></textarea>
              </div>
              {errors.description && errors.description.type == 'required' ? <div className='error'>Description is required *</div> : null}
              {errors.description && errors.description.type == 'maxLength' ? <div className='error'>Description Length should be less than 101 characters</div> : null}

              <br />
            </div>
            <div className='row'>
              <div className='col-lg-12 col-sm-12'>
                <button className='course_btn'>Upload</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  </>
}
