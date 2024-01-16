import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/headshot-cutout.jpg"
        alt="Photo of Autumn Green"
        className={styles.headshot}
        width={200}
        height={200}
        priority
      />
    </main>
  );
}
