import { Provider } from 'react-redux';
import store from './redux/store';
import PhoneContainer from './components/PhoneContainer';
import TvContainer from './components/TvContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneContainer/>
        <TvContainer/>
      </div>
    </Provider> 
  );
}

export default App;