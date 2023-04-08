import styles from "./become-pro.module.css";
import Image from "next/image";

// icons
import WebAppLogo from "@/public/assets/computer.png";
import MobileAppLogo from "@/public/assets/user-interface.png";
import ApiLogo from "@/public/assets/api.png";

const BecomePro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Devenez Pro en 4 semaines</h1>
        <p>
          Grâce à notre approche immersive, vous acquerrez des compétences de
          pointe en développement fullstack avec les technologies les plus
          récentes.
        </p>
      </div>

      <div className={styles.elements}>
        <div className={styles.element}>
          <Image
            className={styles.image}
            src={WebAppLogo}
            alt="webAppLogo"
            width={100}
            height={100}
          />
          <h3>DEVELOPPEMENT WEB</h3>
          <p className={styles.alignLeft}>
            Notre formation couvre les principaux langages et frameworks du web,
            tels que JavaScript, React et Node.js.
            <br /> Vous apprendrez à créer des applications web de qualité
            professionnelle en utilisant des outils modernes tels que MongoDB et
            GraphQL.
            <br /> A la fin de cette formation vous acquerrez les compétences
            nécessaires pour devenir un développeur web efficace et polyvalent
          </p>
        </div>
        <div className={`${styles.element} ${styles.vertical}`}>
          <Image
            className={styles.image}
            src={MobileAppLogo}
            alt="MobileAppLogo"
            width={100}
            height={100}
          />
          <h3>DEVELOPPEMENT MOBILE</h3>
          <p className={styles.alignLeft}>
            Cette formation vous apprendra aussi à créer des applications
            mobiles natives pour les plateformes iOS et Android, en utilisant
            des outils tels que React Native et Firebase.
            <br /> Vous acquerrez les compétences pour concevoir des interfaces
            utilisateur attrayantes et intuitives, ainsi que pour implémenter
            des fonctionnalités telles que la géolocalisation et les
            notifications push. <br />A la fin de cette formation vous serez en
            mesure de créer des applications mobiles de qualité professionnelle
            en peu de temps.
          </p>
        </div>
        <div className={`${styles.element} ${styles.vertical}`}>
          <Image
            className={styles.image}
            src={ApiLogo}
            alt="ApiLogo"
            width={120}
            height={100}
          />
          <h3>API REST</h3>
          <p className={styles.alignLeft}>
            Ici ont vous apprendra à concevoir et à implémenter des API RESTful
            efficaces en utilisant des langages tels que Node.js et Express.
            <br />
            Vous acquerrez les compétences nécessaires pour créer des endpoints
            d'API robustes qui permettent aux applications de communiquer entre
            elles.
            <br />A la fin de cette formation vous serez en mesure de créer des
            API RESTful de qualité professionnelle pour vos applications web et
            mobiles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BecomePro;
