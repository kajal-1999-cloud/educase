import React from 'react'
import image from '../../assets/download (1).jpg'
import "./profile.css"
function Profile() {
  return (
    <div className='profile'>

        <div className='container'>
        <div className='profileInfo' >
        <div className='image'>
        <img src={image} alt='img...'/>
        <input type='file'></input>
        </div>
      <div className='info'>
      <p>name</p>
        <p>email@gmail.com</p>
      </div>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

        </div>
    </div>
  )
}
export default Profile