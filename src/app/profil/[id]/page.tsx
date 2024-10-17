// app/profil/[id]/page.tsx

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  // Check if the session is not valid (user not authenticated)
  if (!session) {
    return {
      redirect: {
        destination: '/auth/prihlasenie',
        permanent: false,
      },
    };
  }

  // Add your logic to fetch user profile data here (optional)
  const { id } = context.params as { id: string };

  // Return the session and any other props you want to pass to the page
  return { props: { session, id } };
};

const ProfilePage = ({ session, id }: { session: any; id: string }) => {
  return (
    <div>
      <h1>Profil {id}</h1>
      <p>Welcome, {session.user?.name}</p>
      {/* Render user profile data here */}
    </div>
  );
};

export default ProfilePage;
