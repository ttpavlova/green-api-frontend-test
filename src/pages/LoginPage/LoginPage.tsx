import { useState } from "react";
import { useChatStore } from "../../store/chatStore";
import { getLogIn } from "../../store/selectors";
import type { Credentials } from "../../types/types";
import { greenApi } from "../../api/greenApi";
import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  const [idInstance, setIdInstance] = useState<Credentials["idInstance"]>("");
  const [apiTokenInstance, setApiTokenInstance] =
    useState<Credentials["apiTokenInstance"]>("");
  const [error, setError] = useState<string | null>(null);

  const logIn = useChatStore(getLogIn);

  const isButtonDisabled = !idInstance || !apiTokenInstance;

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await greenApi.getStateInstance(
        idInstance,
        apiTokenInstance,
      );

      if (data && data.stateInstance === "authorized") {
        logIn(idInstance, apiTokenInstance);
      } else {
        setError("Account is not authorized");
      }
    } catch (err) {
      setError("An error occured. Try again later");
      console.log(err);
    }
  };

  return (
    <div className={styles.loginPage}>
      <p>Enter your data from the GREEN-API system</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={idInstance}
          onChange={(e) => setIdInstance(e.target.value)}
          placeholder="idInstance"
          className={styles.input}
        />
        <input
          type="text"
          value={apiTokenInstance}
          onChange={(e) => setApiTokenInstance(e.target.value)}
          placeholder="apiTokenInstance"
          className={styles.input}
        />
        {error && <p className={styles.error}>{error}</p>}

        <button
          type="submit"
          disabled={isButtonDisabled}
          className={styles.btn}
        >
          Log In
        </button>
      </form>
    </div>
  );
};
