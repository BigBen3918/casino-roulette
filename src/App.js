import Routes from './router';
import store from './store';
import { Provider } from 'react-redux';

import "./components/style/custom.css";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
