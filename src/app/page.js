import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles["hero__title"]}>I build realities from dreams</h1>
        <p className={styles["hero__body"]}>
          I will apply my 18 years of full-stack software engineering experience
          to deliver quality web applications that balance a dedication to
          maintainability and best practices with agility and rapid deployment.
        </p>
        <div role="list" className={styles["hero__links"]}>
          <div role="listitem">Github</div>
          <div role="listitem">Linkedin</div>
          <div role="listitem">Resume</div>
          <div role="listitem">Email</div>
        </div>
      </section>

      <div className={styles["headshot"]}>
        <Image
          src="/headshot-cutout.jpg"
          alt="Photo of Autumn Green"
          className={styles["headshot__image"]}
          width={200}
          height={200}
          priority
        />
        <div className={styles["headshot__name"]}>Autumn Green</div>
      </div>
    </main>
  );
}
