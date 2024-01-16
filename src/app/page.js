import { Roboto_Mono } from "next/font/google";

import Image from "next/image";
import styles from "./page.module.css";

import { SiGithub, SiLinkedin } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";
import { GrDocumentPdf } from "react-icons/gr";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles["hero__title"]}>
          <div>
            <span className={styles.emphasis}>Achievable</span> Dreams,
          </div>
          <div>
            <span className={styles.emphasis}>Maintainable</span> Realities
          </div>
        </h1>
        <p className={styles["hero__description"]}>
          I will apply my 18 years of full-stack software engineering experience
          to deliver quality web applications that balance a dedication to
          maintainability and best practices with agility and rapid deployment.
        </p>
        <div role="list" className={styles["hero__links"]}>
          <div role="listitem">
            <SiGithub />
            Github
          </div>
          <div role="listitem">
            <SiLinkedin />
            Linkedin
          </div>
          <div role="listitem">
            <GrDocumentPdf />
            Resume
          </div>
          <div role="listitem">
            <TfiEmail />
            Email
          </div>
        </div>
      </section>

      <div className={styles["headshot"]}>
        <div className={styles["headshot__circle"]}></div>
        <Image
          src="/headshot-cutout.jpg"
          alt="Photo of Autumn Green"
          className={styles["headshot__image"]}
          width={200}
          height={200}
          priority
        />
        <div className={`${styles["headshot__name"]} ${robotoMono.className}`}>
          Autumn
          <span className={styles["headshot__name--green"]}> Green</span>
        </div>
      </div>
    </main>
  );
}
