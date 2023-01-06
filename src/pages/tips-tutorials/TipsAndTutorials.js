import { Container } from '@mui/material';
import React from 'react';
import Header from '../../components/appbar/Header';
import MainFeaturedPost from './MainFeaturedPost';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const TipsAndTutorials = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <MainFeaturedPost post={mainFeaturedPost} />
    </Container>
  );
};

export default TipsAndTutorials;
