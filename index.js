import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './components/layout';
import MyTodos from './components/myTodos';

/* Agregar el Provider para tener el contexto de redux */

const App = () => (
  <Provider store={store}>
    <Layout title="Mis Tareas">
      <MyTodos />
    </Layout>
  </Provider>
);

render(<App/>, document.getElementById('root'));
