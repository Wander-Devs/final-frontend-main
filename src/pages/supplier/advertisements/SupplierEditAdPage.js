import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SupplierAdvertisementForm from '../../../components/supplier/ads/SupplierAdvertisementForm';
import * as adService from '../../../services/advertisement';

const SupplierEditAdPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [ad, setAd] = useState(null);

  useEffect(() => {
    adService.getPostDetails(+params.id).then((res) => setAd(res.data.data));
  }, [+params.id]);

  const handleEditPost = async (form) => {
    try {
      await adService.updatePostById(ad.id, form).then((response) => {
        alert(response.data.message);
        navigate('/supplier/ads');
      });
    } catch (error) {
      alert('An unexpected error occured');
    }
  };

  if (ad) {
    return (
      <div>
        <SupplierAdvertisementForm post={{ title: ad.title, quantity: ad.quantity }} onSubmit={handleEditPost} />
      </div>
    );
  }

  return <></>;
};

export default SupplierEditAdPage;
