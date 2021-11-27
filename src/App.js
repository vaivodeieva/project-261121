import './App.css';

function App() {
  return (
    <div>
       <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/articles">
                        <Articles />
                    </Route>
                    <Route>
                        <Page404 />
                    </Route>
                </Switch>
                <Footer />
            </Router>    
    </div>
  );
}

export default App;
