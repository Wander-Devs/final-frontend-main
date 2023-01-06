import React from 'react';
import { useNavigate } from 'react-router-dom';
import SupplierAdvertisementForm from '../../../components/supplier/ads/SupplierAdvertisementForm';
import * as authService from '../../../services/auth';
import * as adService from '../../../services/advertisement';

const SupplierPostAdPage = () => {
  const userId = authService.getCurrentUser().data.id;
  const navigate = useNavigate();

  const handleSubmit = async (adForm) => {
    try {
      await adService.addPost(userId, adForm).then((response) => {
        console.log(response);
        if (response.data.status === 1) {
          alert(response.data.message);
          navigate('/supplier/ads');
        } else {
          alert(response.data.message);
        }
      });
    } catch (error) {
      if (error.response.status > 400) {
        alert('An unexpected error occured');
      }
    }
  };

  return (
    <div>
      <SupplierAdvertisementForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SupplierPostAdPage;
