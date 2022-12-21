import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MainFeaturedPost } from './MainFeature';
import { Footer } from './Footer';


const theme = createTheme();

const mainFeaturedPost = {
    title: 'Welcome to Mahendra Ratna Campus',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://mrctu.edu.np/images/1.jpg',
    imageText: 'main image description',
  };

export const Home = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container disableGutters maxWidth="xl" component="main" sx={{ pt: 2, pb: 6 }}> 
                <MainFeaturedPost post={mainFeaturedPost} />
                    <Typography
                        component="h1"
                        variant="h4"
                        align="left"
                        color="blue"
                        gutterBottom
                        sx={{ pl: 2.5, pr:2.5}}
                    >
                        Welcome to MRC
                    </Typography>
                    <Typography
                        paragraph
                        align="left"
                        color="text.primary"
                        gutterBottom
                        sx={{ pl: 2.5, pr:2.5}}
                    >
                        The Mahendra Ratna Campus (MRC) was founded in 1979, college of IT and Education, is highly regarded institution with years
                        of experience and is based in Kathmandu. Its staff is comprised of supremely talented experts who are recognized as some of
                        the finest in the field. It qualifies  students to perform exceptionally well in order to meet the difficulties of the fast
                        evolving market. MRC is entirely committed to offering students a university education. It is affiliated with Tribhuvan
                        University, the prominent and oldest university in Nepal. It offers the four-year Bachelor of Information, Communication, and
                        Technology program, the four-year Bachelor of Major Mathematics program, the four-year Bachelor of Major Science program, the
                        four-year Bachelor of Major English program, and so on.
                    </Typography>
                </Container>
            </ThemeProvider>
            <Footer />
        </div>
    )
}