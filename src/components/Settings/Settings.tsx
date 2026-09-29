import { useChatStore } from "../../store/chatStore";
import { getSignOut } from "../../store/selectors";
import styles from "./Settings.module.scss";

export const Settings = () => {
  const signOut = useChatStore(getSignOut);

  return (
    <div className={styles.settings}>
      <button className={styles.signOutBtn} onClick={signOut}>
        Sign out of profile
      </button>
    </div>
  );
};
