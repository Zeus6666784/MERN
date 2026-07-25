function SkillProgress() {

  const total = 12;
  const completed = 9;
  const pending = total - completed;
  const progress = (completed / total) * 100;

  return (
    <div className="section">
      <h2>Skill Progress</h2>

      <p>Total Skills : {total}</p>
      <p>Completed Skills : {completed}</p>
      <p>Pending Skills : {pending}</p>
      <p>Progress : {progress.toFixed(2)}%</p>

      <hr />
    </div>
  );
}

export default SkillProgress;