import PhoneContainer from './components/PhoneContainer';
import TabletContainer from './components/TabletContainer';
import TvContainer from './components/TvContainer';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneContainer/>
        <TabletContainer/>
        <TvContainer/>
      </div>
    </Provider>
  );
}

export default App;
