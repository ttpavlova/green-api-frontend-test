import type { Credentials } from "../../types/types";
import styles from "./LoginPage.module.scss";

interface LoginPageProps {
  onLogin: React.Dispatch<React.SetStateAction<Credentials | null>>;
}

export const LoginPage = ({ onLogin }: LoginPageProps) => {
  const testCredentials: Credentials = {
    idInstance: "1",
    apiTokenInstance: "1",
  };

  return (
    <div className={styles.loginPage}>
      <p>Enter your data from the GREEN-API system</p>
      <form className={styles.form}>
        <input type="text" placeholder="idInstance" className={styles.input} />
        <input
          type="text"
          placeholder="apiTokenInstance"
          className={styles.input}
        />

        <button
          type="submit"
          className={styles.btn}
          onClick={() => onLogin(testCredentials)}
        >
          Log In
        </button>
      </form>
    </div>
  );
};
