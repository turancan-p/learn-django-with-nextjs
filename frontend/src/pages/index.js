// import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("@/components/pages/home"));
const About = dynamic(() => import("@/components/pages/about"));
const Skills = dynamic(() => import("@/components/pages/skills"));
const Projects = dynamic(() => import("@/components/pages/projects"));
const Contact = dynamic(() => import("@/components/pages/contact"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Django&NextJS Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
