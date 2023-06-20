import Image from "next/image";
import styles from "./page.module.css";
import FilterBar from "@/Components/FilterBar/FilterBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
    </main>
  );
}
