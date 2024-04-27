import MyThemeProvider from './styles/ThemeProvider';
import AppRouter from './router/AppRouter';
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "./app/store"
import { Provider } from "react-redux"


function App() {
  return (
    <MyThemeProvider>
      <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
       <AppRouter />
      {/* </PersistGate> */}
        </Provider>
    </MyThemeProvider>
  );
}

export default App;
