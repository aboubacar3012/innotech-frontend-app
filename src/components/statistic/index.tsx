import styles from "./statistic.module.css";
import Grid from "@mui/material/Grid";
import uniqid from "uniqid";
interface Props {
  statistics?: any;
}
const Statistic = () => {
  const statistics: any = [
    {
      number: "80",
      name: "Heures de formation",
    },
    {
      number: "10",
      name: "Modules de formation",
    },
    {
      number: "6",
      name: "Technologies",
    },
    {
      number: "+1000",
      name: "Etudiants satisfaits",
    },
    {
      number: "+5",
      name: "Teachers",
    },
    {
      number: "+8",
      name: "Partenaires",
    },
  ];

  if (statistics)
    return (
      <Grid container className={styles.container}>
        {statistics.map((statistic: any) => (
          <Grid item xs={6} md={4} key={uniqid()}>
            <div className={styles.statistic}>
              <h1>{statistic.number}</h1>
              <p>{statistic.name}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  else return <></>;
};

export default Statistic;

export async function getStaticProps() {
  return {
    props: {},
  };
}