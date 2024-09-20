import PageIndicatorContent from "../pageIndicatorContent/pageIndicatorContent";
import PageIndicatorType from "@/types/pageIndicatorType";
import styles from "./index.module.scss";

function findState(idx: number, step: number) {
  if (idx < step) return "done";
  if (idx == step) return "current";
  return "upComing";
}

function PageIndicator({
  steps,
  curStep,
}: {
  steps: PageIndicatorType[];
  curStep: number;
}) {
  return (
    <ol className={styles.stepList}>
      {steps.map((e, idx) => {
        let state = findState(idx, curStep);

        return (
          <li key={e.title} className={`${styles.container} ${styles[state]}`}>
            <PageIndicatorContent
              title={e.title}
              content={e.content}
              state={state}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default PageIndicator;
