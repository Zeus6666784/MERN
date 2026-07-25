import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import Eligibility from "./components/Eligibility";
import PlacementStats from "./components/PlacementStats";
import CompanyOffer from "./components/CompanyOffer";
import SkillProgress from "./components/SkillProgress";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <StudentProfile />
      <Eligibility />
      <PlacementStats />
      <CompanyOffer />
      <SkillProgress />
      <Footer />
    </div>
  );
}

export default App;