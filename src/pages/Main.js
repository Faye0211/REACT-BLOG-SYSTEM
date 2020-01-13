import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Login'
import AdminIndex from './AdminIndex'

function Main() {
    return(
        <Router>
            <Route path='/' exact  component={Login} />
            <Route path='/index/'  component={AdminIndex} />
            {/* <Route path='/index/list/' exact  component={ArticleList} /> */}
            {/* <Route path='/index/add/:id' exact  component={AddArticle} /> */}
        </Router>
    )
}
export default Main