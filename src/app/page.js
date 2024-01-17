import { Roboto_Mono } from "next/font/google";

import Image from "next/image";
import styles from "./page.module.css";

import { SiGithub, SiLinkedin } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";
import { GrDocumentPdf } from "react-icons/gr";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

function HeroLink({ href, children }) {
  return (
    <a role="listitem" href={href}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={`${robotoMono.className} ${styles["hero__title"]}`}>
          <div>
            <span className={styles.emphasis}>Achievable</span>
            <span> Dreams,</span>
          </div>
          <div>
            <span className={styles.emphasis}>Maintainable</span>
            <span> Realities</span>
          </div>
        </h1>
        <p className={styles["hero__description"]}>
          I will apply my 18 years of full-stack software engineering experience
          to deliver high quality software solutions that balance a dedication
          to maintainability with agility and rapid deployment.
        </p>
        <div role="list" className={styles["hero__links"]}>
          <HeroLink href="https://github.com/chao-mu">
            <SiGithub />
            Github
          </HeroLink>
          <HeroLink href="https://linkedin.com/in/autumn-unicode">
            <SiLinkedin />
            Linkedin
          </HeroLink>
          <HeroLink href="/Autumn%20Green%20-%20Resume.pdf">
            <GrDocumentPdf />
            Resume
          </HeroLink>
          <HeroLink href="mailto:autumn@queerlyautumn.com">
            <TfiEmail />
            Email
          </HeroLink>
        </div>
      </section>

      <div className={styles["headshot"]}>
        <div className={styles["headshot__circle"]}></div>
        <Image
          src="/headshot.png"
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
