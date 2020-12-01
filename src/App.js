const { BrowserRouter, Route, Switch } = require("react-router-dom")
const { default: Finance } = require("./Finance")
const { default: ID } = require("./ID")


const App = () => {
    return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/">
            <ID/>
        </Route>
        <Route exact path="/verify">
            <Finance/>
        </Route>
    </Switch>
    </BrowserRouter>
    )
}

export default App