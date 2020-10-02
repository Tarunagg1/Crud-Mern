import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/layouts/Navbar'
import {Switch,Route} from 'react-router-dom'
import Adduser from './components/user/Adduser'
import Edituser from './components/user/Edituser'
import Viewuser from './components/user/Viewuser'



export default function App() {
    return (
        <div>
            <Navbar />
           <Switch>
               <Route exact path="/" component={Home}></Route>
               <Route exact path="/contact" component={Contact} ></Route>
               <Route exact path="/about" component={About} ></Route>
               <Route exact path="/user/add" component={Adduser} ></Route>
               <Route exact path="/user/edit/:id" component={Edituser}></Route>
               <Route exact path="/user/view/:id" component={Viewuser}></Route>
               <Route component={Home} ></Route>

           </Switch>
        </div>
    );
}


