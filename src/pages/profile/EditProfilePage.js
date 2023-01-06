import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import ProfileForm from '../../components/profile/ProfileForm';
import * as authService from '../../services/auth';
import * as userService from '../../services/users';

const EditProfilePage = () => {
  const userId = authService.getCurrentUser().data.id;
  const userType = authService.getCurrentUser().data.type;
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    userService.getUserById(userId).then((res) => {
      setUser(res.data.data);
    });
  }, [userId]);

  const handleEditProfile = async (profileForm) => {
    try {
      await userService.updateUserById(userId, profileForm).then((response) => {
        alert(response.data.message);
        navigate(`/${userType}/profile`);
      });
    } catch (error) {
      alert(error);
    }
  };

  if (user) {
    return (
      <Container maxWidth="md">
        <ProfileForm
          userDetails={{
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            mobileNo: user.mobileNo,
            address: user.address,
            dob: user.dob,
          }}
          onEditProfile={handleEditProfile}
        />
      </Container>
    );
  }

  return <h3>Account details not found</h3>;
};

export default EditProfilePage;
