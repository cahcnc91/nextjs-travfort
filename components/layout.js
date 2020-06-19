import Head from "next/head";
import HeroSection from "./hero-section";
import Link from "next/link";
import { Fragment } from "react";

export const siteTitle = "Travfor Alarmes";

export default function Layout({ children, home }) {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Travfort alarmes é uma empresa especializada em segurança eletrônica, instalação de alarmes e câmeras, e monitoramento 24h "
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="http://fonts.googleapis.com/css?family=Lato:100,300,400,300italic"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://api.mapbox.com/mapbox-gl-js/v1.9.0/mapbox-gl.css" rel="stylesheet" />
      </Head>
      <HeroSection></HeroSection>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </Fragment>
  );
}
