import bannerImage from "@/public/assets/banner-image.png";
import Image from "next/image";
import styles from "./courses.module.css";
import Grid from "@mui/material/Grid"; // Grid version 1

// icons
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Fragment } from "react";

const Courses = () => {
  const courses = [
    {
      title: "Introduction",
      chapters: 4,
      hours: 4,
      tasks: 3,
      image: "https://ctcgulf.com/wp-content/uploads/2016/05/it4.jpg",
      description:
        "Dans cette partie, nous allons nous familiariser avec les modalités pratiques de suivi du cours. Après cela, nous aurons un aperçu des bases du développement Web et parlerons également des progrès du développement d'applications Web au cours des dernières décennies.",
    },
    {
      title: "Premiers pas avec React",
      chapters: 4,
      hours: 4,
      tasks: 3,
      image: "https://www.pragma.com.co/hubfs/h_react.jpg",
      description:
        "Dans cette partie, nous nous familiarisons avec la bibliothèque React, que nous utiliserons pour écrire le code qui s'exécute dans le navigateur. Nous examinerons également certaines fonctionnalités de JavaScript qui sont importantes pour comprendre React.",
    },
    {
      title: "Communiquer avec le serveur",
      chapters: 4,
      hours: 4,
      tasks: 3,
      image:
        "https://user.oc-static.com/upload/2020/04/03/15859247370931_compo_comprendre_le_web_revemp-05.png",
      description:
        "Nous continuerons notre introduction à React. Tout d'abord, nous verrons comment faire le rendu d'une collection de données, comme une liste de noms, à l'écran. Après cela, nous respecterons comment un utilisateur peut soumettre des données à une application React à l'aide de formulaires HTML. Ensuite, nous nous concentrons sur la façon dont le code JavaScript dans le navigateur peut récupérer et gérer les données stockées dans un serveur principal distant. Enfin, nous examinerons rapidement quelques façons simples d'ajouter du style CSS à nos applications React.",
    },
    {
      title: "Programmation côté serveur avec NodeJS et Express",
      chapters: 4,
      hours: 4,
      tasks: 3,
      image:
        "https://qph.cf2.quoracdn.net/main-qimg-0b80443be251e11df8d34cf0d57d851d",
      description:
        "Dans cette partie, nous nous concentrons sur le backend, c'est-à-dire sur la mise en œuvre de fonctionnalités côté serveur de la pile. Nous allons implémenter une API REST simple dans Node.js en utilisant la bibliothèque Express, et les données de l'application seront stockées dans une base de données MongoDB. À la fin de cette partie, nous déploierons notre application sur Internet.",
    },
    {
      title: "Test des serveurs Express, gestion des utilisateurs",
      chapters: 4,
      hours: 4,
      tasks: 3,
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--SXLKaE7n--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://thepracticaldev.s3.amazonaws.com/i/zayddox3v8ysiujutnxb.png",
      description:
        "Dans cette partie, notre attention se porte sur le backend, c'est-à-dire sur l'implémentation de fonctionnalités du côté serveur. Nous implémenterons une API REST simple dans Node.js en utilisant la bibliothèque Express, et les données de l'application seront stockées dans une base de données MongoDB. A la fin de cette partie, nous déploierons notre application sur internet.",
    },
    {
      title: "Tester des applications React",
      chapters: 4,
      hours: 4,
      tasks: 3,
      image:
        "https://www.cluemediator.com/wp-content/uploads/2021/02/output-how-to-write-unit-test-cases-using-react-testing-library-clue-mediator.png",
      description:
        "Dans cette partie, nous revenons à l'interface, en examinant d'abord différentes possibilités pour tester le code React. Nous mettrons également en œuvre une authentification basée sur des jetons qui permettra aux utilisateurs de se connecter à notre application.",
    },
    {
      title: "Gestion d'état avec Redux",
      chapters: 4,
      hours: 4,
      tasks: 3,
      image:
        "https://codeit.mk/dam/jcr:2200ee35-a3b1-43c0-9589-e036ae9ea5d8/redux.1.2020-12-17-07-49-19.png",
      description:
        "Jusqu'à présent, nous avons placé l'état et la logique d'état de l'application directement dans les composants React. Lorsque les applications grossissent, la gestion de l'état doit être déplacée en dehors des composants React. Dans cette partie, nous présenterons la bibliothèque Redux, qui est actuellement la solution la plus populaire pour gérer l'état des applications React. Nous découvrirons la version allégée de Redux directement supportée par React, à savoir le contexte React et le hook useRedux, ainsi que la bibliothèque React Query qui simplifie la gestion de l'état du serveur.",
    },
    {
      title:
        "React router, hooks personnalisés, application de style avec CSS et webpack",
      chapters: 4,
      hours: 4,
      tasks: 3,
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--_bS1dmNu--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bohilxedfl6ijlltfyeq.png",
      description:
        "La huitième partie du cours aborde plusieurs thèmes différents. Tout d'abord, nous allons nous familiariser avec le routeur React. Le routeur React nous aide à diviser l'application en différentes vues qui sont affichées en fonction de l'URL dans la barre d'adresse du navigateur. Après cela, nous examinerons quelques autres façons d'ajouter des styles CSS aux applications React. Pendant tout le cours, nous avons utilisé create-react-app pour générer le corps de nos applications. Cette fois, nous allons jeter un œil sous le capot : nous allons apprendre comment fonctionne Webpack et comment nous pouvons l'utiliser pour configurer nous-mêmes l'application. Nous verrons également les fonctions de crochet et comment définir un crochet personnalisé.",
    },
    {
      title: "GraphQL",
      chapters: 4,
      hours: 4,
      tasks: 3,
      image:
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/121416338/original/050d082d234e51b37dda34ecc14ced3503300edc/create-graphql-using-react-native-apollo-react.png",
      description:
        "Cette partie du cours porte sur GraphQL, l'alternative de Facebook à REST pour la communication entre navigateur et serveur.",
    },
    {
      title: " React Native",
      chapters: 4,
      hours: 4,
      tasks: 3,
      image:
        "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1885/posts/39669/image-upload/ListApp.jpg",
      description:
        "Dans cette partie, nous allons apprendre à créer des applications mobiles Android et iOS natives avec JavaScript et React en utilisant le framework React Native. Nous plongerons dans l'écosystème React Native en développant une application mobile complète à partir de zéro. En cours de route, nous apprendrons des concepts tels que comment rendre des composants d'interface utilisateur natifs avec React Native, comment créer de belles interfaces utilisateur, comment communiquer avec un serveur et comment tester une application React Native.",
    },
  ];
  return (
    <div>
      <div className={styles.header}>
        <h1>PROGRAMME</h1>
        <p>
          Notre programme intensif de 4 semaines est conçu pour vous aider à
          devenir un développeur professionnel en un temps record.
          <br />
          Vous apprendrez les compétences pratiques nécessaires pour créer des
          applications web et mobiles de qualité professionnelle, avec l'aide de
          nos instructeurs expérimentés qui vous guideront à travers des projets
          pratiques, des ateliers et des défis.
          <br />
        </p>
      </div>

      <Grid container>
        {courses.map((course) => (
          <Grid
            xs={12}
            md={6}
            key={course.title}
            display="flex"
            justifyContent="center"
            // alignItems="center"
            marginY={3}
            item
          >
            <div className={styles.card}>
              <Image
                className={styles.image}
                src={course.image}
                alt="me"
                width={400}
                height={270}
              />
              <div className={styles.body}>
                <h2>{course.title}</h2>
                <div className={styles.infos}>
                  <div className={styles.info}>
                    <PlayCircleFilledIcon />
                    <span>{Math.floor(Math.random() * 4 + 1)} chapitres</span>
                  </div>
                  <div className={styles.info}>
                    <HourglassEmptyIcon />
                    <span>{Math.floor(Math.random() * 7 + 1)} heures</span>
                  </div>
                  <div className={styles.info}>
                    <ListAltIcon />
                    <span>{Math.floor(Math.random() * 3 + 1)} éxercices</span>
                  </div>
                </div>
                <p>{course.description}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Courses;
