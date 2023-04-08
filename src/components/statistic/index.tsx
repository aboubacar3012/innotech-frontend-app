import styles from "./statistic.module.css";
import Grid from "@mui/material/Grid";

const Statistic = () => {
  const statistics = [
    {
      number: "80",
      name: "Heures de formation",
    },
    {
      number: "12",
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
      number: "+15",
      name: "Teachers",
    },
    {
      number: "+15",
      name: "Partenaires",
    },
  ];
  return (
    <Grid container className={styles.container}>
      {statistics.map((statistic) => (
        <Grid item xs={6} md={4}>
          <div className={styles.statistic} key={statistic.name}>
            <h1>{statistic.number}</h1>
            <p>{statistic.name}</p>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Statistic;
