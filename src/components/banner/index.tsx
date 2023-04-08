import styles from "./banner.module.css";
import Image from "next/image";
import bannerImage from "@/public/assets/banner-image.png";
import CallToActionButton from "../ui/call-to-action-button";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <h1 className={styles.title}>Développeur fullstack web & mobile</h1>
        <p>
          Devenez un développeur web professionnel en seulement 12 semaines!
          Rejoignez notre formation de développement web dès maintenant pour
          apprendre les compétences pratiques nécessaires pour créer des
          applications web et mobiles de qualité professionnelle.
        </p>
        <CallToActionButton center={true} />
      </div>
      <div className={styles.right}>
        <Image src={bannerImage} alt="me" className={styles.bannerImageSize} />
      </div>
    </div>
  );
};

export default Banner;
