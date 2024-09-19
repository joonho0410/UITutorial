import data from "@/data/pageIndiactorData.json"
import PageIndicatorContent from "../pageIndicatorContent/pageIndicatorContent"
import PageIndicatorType from "@/types/pageIndicatorType"
import styles from "./index.module.scss"

const mockData = data.steps as PageIndicatorType[]

function PageIndicator () {
    return (
        <ol className={styles.stepList}>
            {mockData.map((e) => {
                return <li key={e.title} className={`${styles.container} ${styles[e.state]}`}>
                    <PageIndicatorContent title={e.title} content={e.content} state={e.state} />
                </li>
            })}
        </ol>
    )    
}

export default PageIndicator