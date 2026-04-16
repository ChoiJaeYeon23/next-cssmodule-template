import { Button } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.inner}>
          <div className={styles.main}>
            <div className={styles.intro}>
              <h1>Next.js CSS Module Template</h1>
              <p>
                CSS Module 기반으로 스타일링하는 Next.js 템플릿입니다.{" "}
                <code className={styles.code}>*.module.css</code> 파일을 사용하여
                컴포넌트별로 스코프된 스타일을 적용할 수 있습니다.
              </p>
            </div>
            <div className={styles.ctas}>
              <Button variant="primary" href="https://nextjs.org/docs">
                Documentation
              </Button>
              <Button variant="secondary" href="https://github.com">
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}