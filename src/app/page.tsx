import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1>Welcome</h1>
        <ul>
          <li>Hello</li>
          <li>Next Js</li>
          <li>The Framework</li>
          <li>Based on React JS</li>
          <li>And it will give me</li>
          <li>Lovwly Job and lot of money</li>
        </ul>
        <button>Click Me</button>
      </div>
    </main>
  );
}
