import React from 'react';
import { Switch, Route } from 'react-router';
import w16_NavbarPage_46 from './pages/w16/w16_NavbarPage_46';
import ClassDemoPage_46 from './pages/ClassDemoPage_46';
import w14_HooksT41Page_46 from './pages/w14/w14_HooksT41Page_46';
import w14_HooksT43Page_46 from './pages/w14/w14_HooksT43Page_46';

const App_46 = () => {
  return (
    <>
    <Switch>
      <Route exact path='/' component={ClassDemoPage_46} />
      <Route exact path='/w14' component={w14_HooksT41Page_46} />
      <Route exact path='/w14/T41' component={w14_HooksT41Page_46} />
      <Route exact path='/w14/T43' component={w14_HooksT43Page_46} />
    </Switch>
    </>
  );
};

export default App_46;
