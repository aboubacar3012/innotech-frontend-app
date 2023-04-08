import styles from "./statistic.module.css";
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
      number: "15",
      name: "Professeurs a votre écoute",
    },
  ];
  return (
    <div className={styles.container}>
      {statistics.map((statistic) => (
        <div className={styles.statistic} key={statistic.name}>
          <h1>{statistic.number}</h1>
          <p>{statistic.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistic;
