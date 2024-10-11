import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import MainPage from "./Components/MainPage/MainPage";

function App() {
  return (
    <div>
      <FluentProvider theme={webLightTheme}>
        <MainPage></MainPage>
      </FluentProvider>
    </div>
  );
}

export default App;
