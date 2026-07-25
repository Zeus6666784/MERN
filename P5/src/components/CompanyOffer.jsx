function CompanyOffer() {

  const basic = 550000;
  const hra = 50000;
  const bonus = 25000;
  const total = basic + hra + bonus;

  return (
    <div className="section">
      <h2>Company Offer</h2>

      <p>Company : Infosys</p>
      <p>Basic Salary : ₹{basic}</p>
      <p>HRA : ₹{hra}</p>
      <p>Bonus : ₹{bonus}</p>
      <p>Total Package : ₹{total}</p>

      <hr />
    </div>
  );
}

export default CompanyOffer;