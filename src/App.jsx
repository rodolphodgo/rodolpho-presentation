import AppLogo from "./components/AppLogo"
import HomePage from "./pages/HomePage";
import { colors } from "./utils/styles";

function App() {
  const appStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    backgroundColor: "lightblue"
  };
  const appBody = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "darkblue"
  }

  return (
    <div>
      <div style={appStyle}>
        <div style={{ fontFamily: "Roboto", width: 500 }}>
          <AppLogo/>
        </div>
      </div>
      <div style={appBody}>
        <div style={{ fontFamily: "Roboto", width: 900 }}>
          <HomePage/>
        </div>
      </div>
    </div>
  );
}

export default App
