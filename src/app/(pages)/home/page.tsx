import React from "react";
import Navbar from "@/components/Navbar";
import getCurrentUser from "@/actions/getCurrentUser";
import Billboard from "@/components/Billboard";

const Home: React.FC = async () => {
  const currentUser = await getCurrentUser();

  return (
    <>
      <Navbar username={currentUser?.name} image={currentUser?.image} />
      <Billboard />
    </>
  );
};
export default Home;
