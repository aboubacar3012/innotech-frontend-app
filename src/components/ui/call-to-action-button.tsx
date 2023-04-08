import { useRouter } from "next/router";
import styles from "./call-to-action.button.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
interface Props {
  center: boolean;
}
const CallToActionButton = ({ center }: Props) => {
  const router = useRouter();

  const onClickButton = () => {
    window.open(
      "https://docs.google.com/forms/d/1XUPAky346ekKlmv28n4itg6gqGV09_PjwT0WKKzb2iI/edit",
      "_blank"
    );
  };

  return (
    <button
      onClick={onClickButton}
      className={`${styles.button} ${center ? styles.center : ""}`}
    >
      Inscrivez-vous maintenant <ChevronRightIcon fontSize="large" />
    </button>
  );
};

export default CallToActionButton;
