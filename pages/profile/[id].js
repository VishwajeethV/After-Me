// This is a dynamic route for viewing individual profiles
import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;

  // Replace with your data fetching logic
  return <div>Profile ID: {id}</div>;
};

export default Profile;
