/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OfferForm from '../../../components/post-offer/OfferForm';
import { getPostDetails } from '../../../services/advertisement';

const MakeOffer = () => {
  const param = useParams();

  return <OfferForm />;
};

export default MakeOffer;
