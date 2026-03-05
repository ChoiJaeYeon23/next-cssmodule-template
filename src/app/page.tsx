import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Next.js CSS Module Template</h1>
          <p>
            CSS Module 기반으로 스타일링하는 Next.js 템플릿입니다.{" "}
            <code className={styles.code}>*.module.css</code> 파일을 사용하여
            컴포넌트별로 스코프된 스타일을 적용할 수 있습니다.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
          <a
            className={styles.secondary}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
