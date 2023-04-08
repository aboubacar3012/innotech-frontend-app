import styles from "./plans.module.css";
import Image from "next/image";
// icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Plans = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>NIVEAUX & TARIFS</h1>
        <p>
          Nous proposons une formation Fullstack en développement web et mobile
          de qualité pour les débutants comme pour les développeurs plus
          avancés. Nos tarifs sont compétitifs et nous offrons des options
          flexibles pour s'adapter à votre emploi du temps et à votre budget.
          Vous bénéficierez d'une formation intensive pour développer vos
          compétences en programmation et atteindre vos objectifs professionnels
        </p>
      </div>

      <div className={styles.container}>
        <div>
          {" "}
          <Image
            className={`${styles.image} ${styles.cardImage}`}
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/136860912/original/9b2b11fc6347aa6836ab4e58949a383e064065f9/create-a-custom-responsive-website-using-html-css-javascript-bootstrap.jpg"
            alt="me"
            width={380}
            height={270}
          />
        </div>
        <div>
          <h1>NIVEAU DE BASE</h1>
          <hr />
          <p>
            Le niveau de base est entièrement gratuit et permet aux futurs
            étudiants d'acquérir les notions de base telles que HTML, CSS et
            JavaScript. Cette formation est conçue pour préparer les étudiants
            aux niveaux suivants, où ils développeront leurs compétences en
            programmation et découvriront les frameworks les plus populaires
            tels que React et Node.js
          </p>
          <div className={styles.infos}>
            <div className={styles.info}>
              <CheckCircleIcon />
              <span>Prix: Gratuit</span>
            </div>
            <div className={styles.info}>
              <CheckCircleIcon />
              <span>Durée: 4 Semaines</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.container} ${styles.right} ${styles.middle}`}>
        <div>
          <h1>NIVEAU AVANCEE</h1>
          <hr />
          <p>
            Le niveau avancée de notre programme de formation Fullstack est
            conçu pour permettre aux étudiants d'apprendre les notions avancées
            de la programmation web. Ils découvriront comment créer des serveurs
            backend, des API REST, la gestion d'état avec Redux, GraphQL etc...
            Les projets inclus dans cette formation sont inspirés des projets
            réels en entreprise et offrent aux étudiants une expérience pratique
            de développement. Cette formation intensive est dispensée par des
            instructeurs expérimentés qui guident les étudiants à travers des
            projets concrets et des ateliers pratiques.
          </p>
          <div className={styles.infos}>
            <div className={styles.info}>
              <CheckCircleIcon />
              <span>Prix: 1.500.000 GNF</span>
            </div>
            <div className={styles.info}>
              <CheckCircleIcon />
              <span>Durée: 4 Semaines</span>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <Image
            className={`${styles.image} ${styles.cardImage}`}
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/135417407/original/222912611cbbce26fa30eced52ef9abf50fa172b/create-react-app-with-apollo-graphql.jpg"
            alt="me"
            width={380}
            height={270}
          />
        </div>
      </div>
      <div className={styles.container}>
        <div>
          {" "}
          <Image
            className={`${styles.image} ${styles.cardImage}`}
            src="https://unblast.com/wp-content/uploads/2022/08/Programmer-Illustration.jpg"
            alt="me"
            width={380}
            height={270}
          />
        </div>
        <div>
          <h1>PARCOURS</h1>
          <hr />
          <p>
            Dans cette derniere partie, notre formation se concentre sur la
            gestion de projet, le prototypage et le story board. La
            particularité de cette formation est qu'elle se fait en alternance,
            entre l'école et l'entreprise. Les étudiants travailleront sur un
            projet full stack web ou mobile tout au long de la formation, et à
            la fin, présenteront leur projet. Ensuite, ils passeront un examen
            pour obtenir un titre reconnu par l'Etat guinéen. Cela leur
            permettra de s'insérer facilement dans le marché de travail.
          </p>
          <div className={styles.infos}>
            <div className={styles.info}>
              <CheckCircleIcon />
              <span>Prix: 5.000.000 GNF</span>
            </div>
            <div className={styles.info}>
              <CheckCircleIcon />
              <span>Durée: 24 Semaines </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;

