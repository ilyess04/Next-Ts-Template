"use client";
import { HomeTemplate } from "@/templates";
import useLocales from "@/common/hooks/useLocales/useLocales";

const Home = (): JSX.Element => {
  const locales = useLocales();
  console.log(locales, "xxxxxxxxxx");
  return <HomeTemplate />;
};
export default Home;
