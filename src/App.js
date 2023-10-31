import "../src/styles/styles.css";
import ConfigContextProvider from "./context/config";
import ImageGallary from "./pages/ImageGallary";

function App() {
  return (
    <ConfigContextProvider>
      <ImageGallary />
    </ConfigContextProvider>
  );
}

export default App;
