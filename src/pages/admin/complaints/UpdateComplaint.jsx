/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ComplaintForm from '../../../components/add-complaints/ComplaintForm';
import { getComplaintById } from '../../../services/complaint';

const UpdateComplaint = () => {
  const param = useParams();
  console.log(param);
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    getComplaintById(+param.id).then((res) => {
      if (res.data && res.data.data) {
        console.log(res.data);
        setComplaint(res.data.data);
      }
    });
  }, [param.id]);

  if (complaint) {
    const { title, summary, isSolved, id } = complaint;
    return <ComplaintForm initialValue={{ title, summary, isSolved, id }} />;
  }
  return <h2>Data not found</h2>;
};

export default UpdateComplaint;
