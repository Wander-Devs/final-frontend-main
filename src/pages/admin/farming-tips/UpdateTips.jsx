import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TipsForm from '../../../components/farming-tips/TipsForm';
import { getTipDetails } from '../../../services/farmingtips';

const UpdateTips = () => {
  const param = useParams();
  const [tip, setTip] = useState(null);

  useEffect(() => {
    getTipDetails(+param.id).then((res) => {
      if (res.data && res.data.data) {
        setTip(res.data.data);
      }
    });
  }, [param]);

  if (tip) {
    const { title, tips, id } = tip;
    return <TipsForm initialValue={{ title, tips, id }} />;
  }
  return <h2>Data not found</h2>;
};

export default UpdateTips;
