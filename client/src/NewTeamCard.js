function NewTeamCard({ teamMember }) {
  console.log(teamMember);

  return (
    <>
      <div className="character-card-container">
        <img
          className="character-card"
          src={teamMember.image}
          alt="character team"
        />
      </div>
    </>
  );
}

export default NewTeamCard;
