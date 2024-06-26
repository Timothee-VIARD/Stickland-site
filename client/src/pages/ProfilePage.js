import { Box } from '@mui/material';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import { Profile } from '../components/Profile/Profile';

const ProfilePage = () => {
  return (
    <Box className="flex flex-col justify-between h-[100vh]">
      <Box className="pt-14">
        <Banner />
      </Box>
      <Profile className="flex-grow" />
      <Footer />
    </Box>
  );
};

export default ProfilePage;
