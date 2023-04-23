import Layout from "../components/Layout";
import Header from "../components/Header";
import SkillsAndExperience from "../components/SkillsAndExperience";
import Portafolio from "../components/Portafolio";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url) => {
      console.log(url);
      NProgress.start();
    };
    router.events.on("routeChangeStart", handleRouterChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouterChange);
    };
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
