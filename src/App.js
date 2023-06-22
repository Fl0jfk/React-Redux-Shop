import PhoneContainer from './components/PhoneContainer';
import TabletContainer from './components/TabletContainer';
import TvContainer from './components/TvContainer';
import CommentsContainer from './components/CommentsContainer';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <h1>Notre boutique</h1>
      <div className="section-one">
        <PhoneContainer/>
        <TabletContainer/>
        <TvContainer/>  
      </div>
      <CommentsContainer/>
    </Provider>
  );
}

export default App;
