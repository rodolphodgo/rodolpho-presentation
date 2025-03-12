import AppLogo from "./components/AppLogo"
import { colors } from "./utils/styles";

function App() {
  const appStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh"
  }

  return (
    <div style={appStyle}>
      <div style={{ fontFamily: "Roboto", width: 500}}>
        <AppLogo/>
      </div>
    </div>
  );
}

export default App
