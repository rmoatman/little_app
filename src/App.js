// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import Card from './components/Card';

// // added
// import ReactToPrint from "react-to-print";
// import "./styles/styles.css"

// // In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
// class ComponentToPrint extends React.Component {
//     render() {
//       return (
//         <div>
//           <Header />
//           <Navbar />
//           <Card />
//           <Card />
//           <Card />
//         </div>
//       );
//   }
// }

// class Example extends React.Component {
//   render() {
//     return (
//       <div>
//         <ReactToPrint
//           trigger={() => <button>Print this out!</button>}
//           content={() => this.componentRef}
//         />
//         <ComponentToPrint ref={(el) => (this.componentRef = el)} />
//       </div>
//     );
//   }
// }

// export default Example;

import React, { useEffect, useState } from 'react';
import getRxcuiInfo from './components/DrugInfo';
import withListLoading from './components/withListLoading';
import axios from 'axios';

// start here-- app called from index.js
// calls withListLoading and passes get RxcuiInfo
function App() {
  const ListLoading = withListLoading(getRxcuiInfo);
  const [appState, setAppState] = useState({
    loading: false,
    drugs: null,
  });

  useEffect(() => {
    const medicine="prozac"
    setAppState({ loading: true });
    const apiUrl = `https://rxnav.nlm.nih.gov/REST/drugs.json?name=` + medicine;
    axios.get(apiUrl).then((drugs) => {
        const allDrugs = drugs.data
        setAppState({ loading: false, drugs: allDrugs });
      });
  }, [setAppState]);

  return (
    <div className='App'>
      <div className='container'>
        <h1>Drug Information</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} drugs={appState.drugs} />
      </div>
    </div>
  );
}

export default App;
