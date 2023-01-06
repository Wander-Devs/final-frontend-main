import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ImageList, ImageListItem } from '@mui/material';
import Header from '../../components/appbar/Header';
import Footer from '../../components/footer/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Box
          sx={{
            bgcolor: 'aliceblue',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography component="h1" variant="h3" align="center" color="text.primary" fontWeight={'bold'}>
              ABOUT US
            </Typography>

            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Grow it Green work with a lot of farmer cooperatives and Associations for production of high value crops
              such as fruits, vegetables and other non-traditional agricultural export crops. Our network of trained
              farmers produce quality vegetables that meet international market standards. This enables us to meet any
              order no matter how large it is.
            </Typography>
          </Container>
        </Box>
        <Container />
      </main>

      <Container maxWidth="lg" align="center">
        <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={300}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <Box sx={{ bgcolor: 'aliceblue', p: 6 }} component="footer">
        <Footer />
      </Box>
    </>
  );
}
const itemData = [
  {
    img: 'https://d34nvibeht08vu.cloudfront.net/wp-content/uploads/2017/08/07154523/Lettuce.jpg',
    title: 'Lettuce',
  },
  {
    img: 'https://bluecollarbrain.com/wp-content/uploads/2021/02/becoming-a-farmer.jpg',
    title: 'Burger',
  },
  {
    img: 'https://www.agdaily.com/wp-content/uploads/2019/03/bg-organic_farmer-001-mangostock.jpg',
    title: 'Camera',
  },
  {
    img: 'https://jooinn.com/images/fruits-and-vegetables.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://i.natgeofe.com/n/ba4d692b-4dbd-41cf-b7c9-14269687d9a7/migrant_16x9.jpg?w=1200',
    title: 'Hats',
  },
  {
    img: 'https://th.bing.com/th/id/R.c8d44976094682af6480aec1bf96ec79?rik=1C7addq4zsdsbA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-msRdj8DAi0Y%2fU17z16wpK-I%2fAAAAAAAAAEw%2fiVcIlN5YCF4%2fs1600%2fFruits_and_Vegetables_Photos_MIL05144.JPG&ehk=7AJFEz8n5uPiJvgLMnhYBeNTpB1oYDFNYO4X4disM7Q%3d&risl=&pid=ImgRaw&r=0',
    title: 'Honey',
  },
  {
    img: 'https://vegetablegrowersnews.com/wp-content/uploads/2018/01/California-FSMA-1024x768.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://th.bing.com/th/id/R.aadab760bc483c900c7d2532399148d4?rik=biXERGDHptJ9Rw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-if8_JDm9nX8%2fUv9uahCr9XI%2fAAAAAAAAAmE%2fiHLllLez05c%2fs1600%2freformaagraria2.jpg&ehk=8gGAbKJOgaOsNzDBHSgpo1xA4lKDcYezLW2cRolpm%2fM%3d&risl=&pid=ImgRaw&r=0',
    title: 'Mushrooms',
  },
  {
    img: 'https://i.pinimg.com/originals/a9/f5/2a/a9f52a91ebc15cc4b65fd147c4fd56f0.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://www.gannett-cdn.com/presto/2020/04/28/PSAS/a8f30929-2f18-495a-9532-030f457ea250-20200425_FARMWORKER_APPRECIATION_CARAVAN_077.JPG?crop=3199,1800,x0,y260&width=3199&height=1800&format=pjpg&auto=webp',
    title: 'Sea star',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.-pNi8lVuRAr9vTG6Lz-G4wHaFl?pid=ImgDet&rs=1',
    title: 'Bike',
  },
];
