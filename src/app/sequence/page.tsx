import SeqSection from "@/components/seqSection/seqSection";
import styles from "./page.module.scss";
import data from "@/data/pageIndiactorData.json";
import BasicForm from "@/components/basicForm/basicForm";

export default function TestProcessPage() {
  const { steps, title } = data;
  const contents = [<BasicForm />, <BasicForm />, <BasicForm />, <BasicForm />];

  // return <SeqSection steps={steps} title={title} contents={contents} />;
  return (
    <div className={styles.container}>
      <ul className={styles.selector}>
        <h3> Examples </h3>
        <li> 주소지 변경 </li>
        <li> 배달 신청 </li>
        <li> 구독 신청 </li>
      </ul>
      <div className={styles.content}>
        <SeqSection steps={steps} title={title} contents={contents} />
      </div>
    </div>
  )
}
