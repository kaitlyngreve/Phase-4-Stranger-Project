function MonsterCard({ monster }) {
  return (
    <>
      <div className="monster-card">
        <h2>{monster.name}</h2>
        <img src={monster.image} alt="monster" />
        <p className="description-monster">{monster.monster_description}</p>
      </div>
    </>
  );
}

export default MonsterCard;
