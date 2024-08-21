import "./HomePage.css";
import Layout from "../Layout";

function HomePage() {
  return (
    <Layout>
      <div className="homepage-container">
        <div className="centered-container">
          <div className="card-header">
            <h2>Todays Weather</h2>
            <p>Aug 21</p>
          </div>
          <div className="weather-details-card">
            {/* Add weather details here */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
