import CallToActionButton from "../ui/call-to-action-button";
import styles from "./action.module.css";
const CallToAction = () => {
  return (
    <div className={styles.container}>
      <h1>Commencez à apprendre dès aujourd'hui !</h1>
      <p className={styles.text}>
        Rejoignez notre communauté dynamique et commencez à construire votre
        carrière de développeur aujourd'hui !
      </p>

      <CallToActionButton />
    </div>
  );
};

export default CallToAction;
