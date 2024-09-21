"use client";

import { useState } from "react";
import PageIndicator from "../pageIndicator/pageIndicator";
import PageIndicatorType from "@/types/pageIndicatorType";
import styles from "./seqSection.module.scss";

type Props = {
  title: string;
  steps: PageIndicatorType[];
  contents: JSX.Element[];
};

function SeqSection({ title, steps, contents }: Props) {
  const [curStep, setCurStep] = useState<number>(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("제출");
    setCurStep((prev) => prev + 1);
  };
  const handlePrev = (e: any) => {
    setCurStep((prev) => prev - 1);
  }

  return (
    <section className={styles.container}>
      <h1> {title} </h1>
      <PageIndicator steps={steps} curStep={curStep} />
      {curStep < contents.length ? (
        <form className={styles.contents} onSubmit={handleSubmit}>
          {curStep < contents.length && contents[curStep]}
          <div className={styles.buttonContainer}>
            {(curStep != 0 && curStep != steps.length) && <button className={styles.prev} onClick={handlePrev} type="button"> 이전으로 </button> }
            <button className={styles.next} type="submit"> 다음으로 </button>
          </div>
        </form>
      ) : (
        <span> done!</span>
      )}
    </section>
  );
}

export default SeqSection;
