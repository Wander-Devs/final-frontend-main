import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ComplaintForm from '../../../components/complaints/ComplaintForm';
import * as complaintService from '../../../services/complaint';

const SupplierEditComplaintPage = () => {
  const params = useParams();
  const [complaint, setComplaint] = useState(null);
  const navigate = useNavigate();

  const handleEditComplaint = async (form) => {
    try {
      await complaintService.updateComplaintById(complaint.id, form).then((response) => {
        alert(response.data.message);
        navigate('/supplier/complaints');
      });
    } catch (error) {
      alert('An unexpected error occured');
    }
  };

  useEffect(() => {
    complaintService.getComplaintById(+params.id).then((res) => setComplaint(res.data.data));
  }, [+params.id]);

  console.log(complaint);

  if (complaint) {
    return (
      <div>
        <ComplaintForm
          complaintDetails={{ title: complaint.title, summary: complaint.summary }}
          onSubmit={handleEditComplaint}
        />
      </div>
    );
  }
  return <></>;
};

export default SupplierEditComplaintPage;
