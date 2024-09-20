import SeqSection from "@/components/seqSection/seqSection";
import styles from "./page.module.scss";
import data from "@/data/pageIndiactorData.json";
import BasicForm from "@/components/basicForm/basicForm";

export default function TestProcessPage() {
  const { steps, title } = data;
  const contents = [<BasicForm />, <BasicForm />, <BasicForm />, <BasicForm />];

  return <SeqSection steps={steps} title={title} contents={contents} />;
}
