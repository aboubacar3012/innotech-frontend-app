import styles from "@/components/header/header.module.css";
import Image from "next/image";
import Link from "next/link";
import InnotechLogo from "@/public/assets/innotech-academy-logo.png";
import CallToActionButton from "../ui/call-to-action-button";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image
            className={styles.image}
            src={InnotechLogo}
            alt="InnotechLogo"
            width={100}
            height={50}
          />
        </div>
        {/* <div className={styles.list}>
          <div>
            <Link href={"#"}>Accueil</Link>
          </div>
          <div>
            <Link href={"#"}>Cours</Link>
          </div>
          <div>
            <Link href={"#"}>Contact</Link>
          </div>
        </div> */}
      </div>
      <div className={styles.right}>
        <CallToActionButton center={false} />
      </div>
    </div>
  );
};

export default Header;
