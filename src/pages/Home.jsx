import { Link } from "react-router-dom";



function Home() {
  return (
    <div className="container">
      <h1>🎟 Welcome to Unchained</h1>
      <h3>Buy tickets, Earn exclusive rewards, Own the moment!</h3>
      <Link to="/Home/Events">
        <h1>Events</h1>
      </Link>
    </div>
  );
}
export default Home;
