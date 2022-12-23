import './App.css';
import {useState} from "react";
import Users from "./modules/users/components/Users";
import Navigation from "./modules/common/components/Navigation";
import Posts from "./modules/posts/components/Posts";
import Gallery from "./modules/gallery/components/Gallery";

function App() {
  const [page, setPage] = useState('posts')
  return (
      <div className="container">
          <Navigation page={page} navigate={setPage}/>
          {page === 'users' ? <Users/> : null}
          {page === 'posts' ? <Posts/> : null}
          {page === 'gallery' ? <Gallery/> : null}
      </div>
  );
}

export default App;
