import React, { useEffect, useRef, useState } from "react";
import image from "../../assets/download (1).jpg";
import { FaCamera } from "react-icons/fa";

import "./profile.css";
function Profile() {
  const fileRef = useRef(null);
  const [profilePhoto, setProfilePhoto] = useState();
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    const storeEmail = JSON.parse(localStorage.getItem("email"));
    const storeName = JSON.parse(localStorage.getItem("name"));
    console.log("e", storeEmail, storeName);
    setFormData({ name: storeName, email: storeEmail });
  }, []);

  const clickInput = () => {
    fileRef.current.click();
  };

  function changePhotofunc(e) {
    const file = e.target.files[0];
    console.log(file);
    const imageUrl = URL.createObjectURL(file);
    setProfilePhoto(imageUrl);
    console.log("hee", profilePhoto);
    console.log("hee", imageUrl);
  }

  return (
    <div className="profile">
      <div className="container">
        <div className="profileInfo">
          <div className="image">
            <div className="icons-input">
              <FaCamera className="icon" onClick={clickInput} />
              <input
                type="file"
                accept="image/*"
                ref={fileRef}
                onChange={(e) => changePhotofunc(e)}
              />
            </div>
            {profilePhoto ? (
              <img src={profilePhoto} alt="img..." />
            ) : (
              <img src={image} alt="img..." />
            )}
          </div>
          <div className="info">
            {formData ? (
              <div>
                <h3>{formData.name}</h3>
                <p>{formData.email}</p>
              </div>
            ) : (
              <div>
                 <h3>Mary Doe</h3>
                <p></p>
              </div>
            )
            }
          </div>
        </div>
        <div className="para">
          {" "}
          <p>
            Lorem Ipsum is simply dummy text of the printing typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
