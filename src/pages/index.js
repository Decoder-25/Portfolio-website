import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import pp from "../../public/images/profile/avatar.png";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Disha | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-start w-full h-full">
            <div className="w-1/2">
              <Image
                src={pp}
                alt="Disha"
                className="w-2/3 h-auto mt-[-50px]"
                style={{ marginLeft: "25%" }}
              />
            </div>
            <div
              className="w-1/2 flex flex-col items-center self-center mt-[-40px]"
              style={{ marginRight: "12%" }}
            >
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design. "
                className="!text-5xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                Node.js.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/DISHA_BISWAS.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:bidisha2125@gmail.com" target={"blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="Disha" className="w-full h-auto"/>
        </div>
      </main>
    </>
  );
}
