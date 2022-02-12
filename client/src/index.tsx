import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {myStore} from './store'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
