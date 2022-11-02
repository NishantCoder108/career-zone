import "./App.css";
import AreaChart from "./components/AreaCharts/Areacharts";
import AutoSuggestion from "./components/AutoSuggestion/AutoSuggestion";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <div>
        <h2> Question 1: Area Chart</h2>
        <AreaChart />
      </div>

      <br />
      <br />

      <h2>Question 2: AutoSuggestion React App</h2>
      <AutoSuggestion />

      <br />
      <br />

      <h2> Question 3: Button  Component Checked by  @testing-library/react. </h2>
      <Counter/>

      <br />
      <br />

      <p style={{fontSize:"x-small"}}>Note: How i approach this challenge , please see <a href="https://github.com/thinkwithcode/career-zone">github repo </a>  </p>
    </div>
  );
}

export default App;
