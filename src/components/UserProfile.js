import React from 'react';

const UserProfile = () => {
  // Mock user data
  const user = { name: 'John Doe', email: 'john@example.com' };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
