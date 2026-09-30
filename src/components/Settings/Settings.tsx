import { useChatStore } from "../../store/chatStore";
import { selectSignOut } from "../../store/selectors";
import styles from "./Settings.module.scss";

export const Settings = () => {
  const signOut = useChatStore(selectSignOut);

  return (
    <div className={styles.settings}>
      <button className={styles.signOutBtn} onClick={signOut}>
        Sign out of profile
      </button>
    </div>
  );
};
