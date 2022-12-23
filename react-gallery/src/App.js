import './App.css';
import Gallery from './modules/gallery/components/Gallery';

function App() {

  const [page, setPage]= useState('posts');


  return (
      <div className="container">
        {/* <Navigation page={page} navigate={setPage} />
      {page === 'gallery' ? <Gallery /> : null}
      { page === 'photos' ? <Photos/> : null} */}
        <div className='wrap'>
          <Gallery />
          <Photos/>
        </div>
      </div>
  );
}

export default App;