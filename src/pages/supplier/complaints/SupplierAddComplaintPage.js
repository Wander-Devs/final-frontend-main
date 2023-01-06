import React from 'react';
import { useNavigate } from 'react-router-dom';
import ComplaintForm from '../../../components/complaints/ComplaintForm';
import * as authService from '../../../services/auth';
import * as complaintService from '../../../services/complaint';

const SupplierAddComplaintPage = () => {
  const userId = authService.getCurrentUser().data.id;
  const navigate = useNavigate();

  const handleSubmit = async (complaintForm) => {
    try {
      await complaintService.addComplaint(userId, complaintForm).then((response) => {
        if (response.data.status === 1) {
          alert(response.data.message);
          navigate('/supplier/complaints');
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
      <ComplaintForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SupplierAddComplaintPage;
