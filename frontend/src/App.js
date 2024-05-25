import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import CapturePage from './components/CapturePage/CapturePage'
import MyPostsPage from './components/MyPostsPage/MyPostsPage'
import UserAccountPage from './components/UserAccountPage/UserAccountPage'
import NotificationsPage from './components/NotificationsPage/NotificationsPage'
import ExplorePage from './components/ExplorePage/ExplorePage'

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />      
      <Route path="/capture" component={CapturePage} />
      <Route path="/posts" component={MyPostsPage} />
      <Route path="/explore" component={ExplorePage} />     
      <Route path="/notifications" component={NotificationsPage} />
      <Route path="/account" component={UserAccountPage} />
    </div>
  );
}

export default App;
