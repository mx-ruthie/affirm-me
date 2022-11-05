import React from 'react';

const Profile = (props) => {
  let user = props.user;
  console.log(user);
 

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md text-center text-md-left">
          <h2>{user.name}</h2>
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{user.nickname}</h2>
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{user.email}</h2>
        </div>
      </div>
      {/* the photo wasn't loading correctly for some reason, but once I tracked down 
      where I was calling the photo in the first place it started working strangely */}
      <img src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;