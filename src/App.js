import { useState } from "react";
import Menubar from "./component/sidebar/Menubar";
import Banner from "./component/Banner/banner";
import Home from "./component/HomeContent/home";
import 'antd/dist/antd.variable.min.css';
// import './app.less';
import "./App.css";
// import { ConfigProvider } from "antd";

// const config = ConfigProvider.config({
//   theme: {
//     primaryColor: "#FF0000",
//   },
//   lightTheme: {
//     primaryColor: "#8da832",
//   },
// });
function App() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = (value) => {
    console.log("value+-+-", value);
    setTheme(value ? "dark" : "light");
  };

  console.log("theme", theme);
  return (
    // <ConfigProvider config>
      <div className="App" theme={theme}>
        <Menubar theme={theme} changeTheme={changeTheme} />
        <Banner theme={theme} changeTheme={changeTheme} />
        <Home />
      </div>
    // </ConfigProvider>
  );
}

export default App;
