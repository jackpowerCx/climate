
import './App.css';
import React,{ Suspense } from 'react';

const Weatherinfo = React.lazy(()=> import('./components/Weatherinfo'));

function App() {

  
    return (
    <div className="App">
      <Suspense fallback={ <div className='loanding' >Loanding ...</div> } >
          <Weatherinfo/>
      </Suspense>
      
    </div>
  );
}

export default App;
