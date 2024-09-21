import styles from "./layout.module.scss"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section className={styles.section}>
            <div className={styles.contents}>
            <h2 className={styles.title}> Page Indicator Tutorial </h2>
            {children}
            </div>
        </section>
    )
  }