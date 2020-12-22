import React from 'react';
import styles from './App.module.scss';
import {HashRouter as Router,Route,Switch,Link,NavLink,Redirect} from 'react-router-dom';
import TodoList from './page/hook-page/todo-list';
import Shopping from "./page/hook-page/shopping";
import CTodoList from "./page/componentPage/c-todo-list";
import CShoping from "./page/componentPage/c-shoping";
import {Provider} from 'react-redux';
import {storeContext,store} from "./redux/contextStore";
function App() {
  return (
      <div className={styles.normal}>
          {/*<storeContext.Provider value={store}>*/}
          <Provider store={store}>
              <Router>
                  <header>
                      <NavLink to={{pathname:'/todo-list'}} activeClassName={'active'}><span>todo-list</span></NavLink>
                      <NavLink to={{pathname:'/shopping'}} activeClassName={'active'}><span>购物车</span></NavLink>
                      <NavLink to={{pathname:'/c-todo-list'}} activeClassName={'active'}><span>c-todo-list</span></NavLink>
                      <NavLink to={{pathname:'/c-shopping'}} activeClassName={'active'}><span>c-shopping</span></NavLink>
                  </header>
                  <Switch>
                      <Route path='/todo-list' exact={true} component={TodoList}/>
                      {/*<Route path='/shopping' exact={true} component={Shopping}/>*/}
                      {/*<Route path='/c-todo-list' exact={true} component={CTodoList}/>*/}
                      {/*<Route path='/c-shopping' exact={true} component={CShoping}/>*/}
                      <Redirect exact={true} from="/" to="todo-list" />
                  </Switch>
              </Router>
          </Provider>
          {/*</storeContext.Provider>*/}
      </div>
  );
}
export default App;
