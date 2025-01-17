// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
// import Footer from "./components/footer/Footer";
// import HomeContainer from './pages/home_container/HomeContainer';
// import { Link } from 'react-router-dom'; // Make sure to import Link
// import Bus from './pages/bus/Bus';
// // import Bus from './pages/bus/Bus';

// function App() {

//   return (
//     <>
//       <Router>
//         <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
//           {/* Navbar */}
//           <Navbar />

//           {/* Home Content */}
//           <Routes>
//             <Route path='/' element={<HomeContainer/>}/>
//             <Route path="/bus" element={<Bus/>} />
//           </Routes>


//           {/* Footer */}
//           <Footer/>
//         </div>
//       </Router>
//     </>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import HomeContainer from './pages/home_container/HomeContainer';
import Bus from './pages/bus/Bus';
// import BusDetails from './pages/bus/BusDetails';  // Import BusDetails component
import Details from './pages/bus/Detail';
import Checkout from './pages/checkout/Checkout';

function App() {

  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <Routes>
            <Route path='/' element={<HomeContainer/>} />
            <Route path="/bus" element={<Bus/>} />
            {/* <Route path="/bus/:id" element={<BusDetails />} />  Dynamic route for bus details */}
            <Route path="/bus/6" element={<Details/>} />
            <Route path="/bus/6/checkout" element={<Checkout/>} />
          </Routes>
          
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App;