import React, { useEffect }  from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.tsx';

const theme = createTheme({});

function App() {
  useEffect(() => {
    // 设置定时器，延迟10秒后发送postMessage
    const timer = setTimeout(() => {
      window.parent?.postMessage({ 'action': 'on-code-ok' }, '*');
    }, 10000); // 10000毫秒 = 10秒

    // 清理定时器
    return () => clearTimeout(timer);
  }, []); // 空依赖数组意味着只在组件挂载时执行
  
  return (
    <>
      <style type="text/css">{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require("react-native-vector-icons/Fonts/MaterialIcons.ttf")}) format('truetype');
        }

        @font-face {
          font-family: 'FontAwesome';
          src: url(${require("react-native-vector-icons/Fonts/FontAwesome.ttf")}) format('truetype');
        }
      `}</style>

      <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Router>
          <Routes>
            <Route path="/test" element={<HomeScreen />} />
          </Routes>
        </Router>
      </SafeAreaProvider>
      </ThemeProvider>
    </>
  );
}

export default App;