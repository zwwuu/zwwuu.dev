import Head from "next/head";
import AboutPane from "../components/about-pane";
import ContactPane from "../components/contact-pane";
import Footer from "../components/footer";
import LandingPane from "../components/landing-pane";
import ProjectPane from "../components/project-pane";
import { getAllProjects } from "../lib/api";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="manifest" href="/static/site.webmanifest" />
        <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#bebebe" />
        <meta name="msapplication-TileColor" content="#bebebe" />
        <meta name="theme-color" content="#bebebe" />
        <title>zwwuu | dev</title>
      </Head>
      <main>
        <LandingPane />
        <AboutPane />
        <ProjectPane projects={projects} />
        <ContactPane />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const projects = getAllProjects();
  return {
    props: {
      projects,
    },
  };
}
