import MyThemeProvider from './styles/ThemeProvider';
import AppRouter from './router/AppRouter';


function App() {
  return (
    <MyThemeProvider>
       <AppRouter />
    </MyThemeProvider>
  );
}

export default App;
