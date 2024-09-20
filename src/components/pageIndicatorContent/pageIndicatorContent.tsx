import PageIndicatorType from "@/types/pageIndicatorType";
import styles from "./index.module.scss";
import Image from "next/image";

function getStateIcon(state: string) {
  switch (state) {
    case "done":
      return <Image src="/icons/check.svg" alt="doneIcon" fill></Image>;
    case "current":
      return <Image src="/icons/3dot.svg" alt="currentIcon" fill></Image>;
    case "upComing":
      return null;
    default:
      return null;
  }
}

function PageIndicatorContent({
  title,
  content,
  state,
}: PageIndicatorType & { state: string }) {
  const icon = getStateIcon(state);

  return (
    <>
      <div className={styles[state]}>{icon}</div>
      <i className={styles.title}>{title}</i>
      <span>{content}</span>
    </>
  );
}

export default PageIndicatorContent;
