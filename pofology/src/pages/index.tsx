import ContactSection from '@/components/partials/ContactSection';
import HeroSection from '@/components/partials/HeroSection';
import AppLayout from '@/layouts/AppLayout';
import type { GetServerSideProps, NextPage } from 'next';

// type Props = {
//   experiences: ;
// }

const Home: NextPage = () => {
  return (
    <AppLayout title="Home">
      <HeroSection />
    </AppLayout>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({}) => {
//   const getExperiences = api.get('/experiences').then((res) => res.data.data);
//   const getEducations = api.get('/educations').then((res) => res.data.data);
//   const profile = api.get('/profile').then((res) => res.data.data);
//   const result = await Promise.all([getExperiences, getEducations, profile]);
//   return {
//     props: {
//       experiences: result[0],
//       educations: result[1],
//       profile: result[2],
//     },
//   };
// };

export default Home;
