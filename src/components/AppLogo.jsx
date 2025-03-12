import { colors } from "../utils/styles"

function AppLogo() {
    const h1Style = {
        color: colors.moss_green,
        textAlign: "center"
    }
    return (
        <>
          <h1 style={h1Style}>Hi. I'm Rdolpho.</h1>
          <h1 style={h1Style}>A student.</h1>
        </>
    );
}

export default AppLogo