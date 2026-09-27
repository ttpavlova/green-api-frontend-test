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
      Login Page
      <button onClick={() => onLogin(testCredentials)}>Set Credentials</button>
    </div>
  );
};
