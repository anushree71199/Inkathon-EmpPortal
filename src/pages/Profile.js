import React from 'react';
import './Profile.css';
import profilePic from '../images/profilePic.jpg';
function Profile() {
  return (
    <div className='profile'>
      <div className='name-details'>
        <div className='picDesignation'>
          <img src={profilePic} alt="profilePic" />
          <h4 style={{marginTop: "25px", marginBottom: "30px", marginRight: "470px"}}>Designation</h4>
        </div>
        <div className='name'>
          <h4>Name: </h4>
          <h4>Phone Number: </h4>
          <h4>Email: </h4>
          <h4>Reports to: </h4>
        </div>
      </div>
      <div class="achievements">
        <h4> Your Achievements here</h4>
        <h6>
          1. Achievement 1
        </h6>
        <h6>
          2. Achievement 2
        </h6>
        <h6>
          3. Achievement 3
        </h6>
        <h6>
          4. Achievement 4
        </h6>
        <h6>
          5. Achievement 5
        </h6>
        <h6>
          6. Achievement 6
        </h6>
      </div>
      <div className='status'>
        <h4>Set Status</h4>
        <select name="selectList" id="selectList">
           <option value="option 1">Available</option>
           <option value="option 2">Busy</option>
           <option value="option 3">In a call</option>
           <option value="option 4">Offline</option>
</select>
      </div>
      <div class="skills">
        <h4>Skills</h4>
        <h6>
          Skill 1: <span>Proficiency Level</span>
        </h6>
        <h6>
          Skill 2: <span>Proficiency Level</span>
          </h6>
          <h6>
          Skill 3: <span>Proficiency Level</span>
          </h6>
          <h6>
          Skill 4: <span>Proficiency Level</span>
          </h6>
          <h6>
          Skill 5: <span>Proficiency Level</span>
          </h6>
          <h6>
          Skill 6: <span>Proficiency Level</span>
          </h6>
      </div>
      </div>
  );
}

export default Profile;