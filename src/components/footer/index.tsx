import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";
import InnotechLogo from "@/public/assets/innotech-logo-text-white.png";
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className={styles.footer}>
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
      <div className={styles.socialMedia}>
        <FacebookIcon className={styles.media} fontSize="large" />
        <InstagramIcon className={styles.media} fontSize="large" />
        <LinkedInIcon className={styles.media} fontSize="large" />
      </div>
      <div>
        ©2023 Tout droits reservé <i>Innotech Academy Corporation</i>
      </div>
    </div>
  );
};

export default Footer;
