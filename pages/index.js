import Layout from "../components/Layout";
import Header from "../components/Header";
import SkillsAndExperience from "../components/SkillsAndExperience";
import Portafolio from "../components/Portafolio";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("Cargo");
  }, []);
  return (
    <Layout>
      {/* Banner */}
      <Header />

      {/* Habilidades y Experiencia */}
      <SkillsAndExperience />

      {/* Portafolio */}
      <Portafolio />
    </Layout>
  );
};

export default Index;
