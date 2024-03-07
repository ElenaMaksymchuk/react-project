import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/structure/Layout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Accessories from './components/pages/Accessories/Accessories';
import Prices from './components/pages/Prices/Prices';
import Reviews from './components/pages/Reviews/Reviews';
import Contacts from './components/pages/Contacts/Contacts';
import Guarantee from './components/pages/Guarantee';
import Phones from './components/pages/Accessories/Phones';
import Computers from './components/pages/Accessories/Computers';
import Monitors from './components/pages/Accessories/Monitors';
import VacuumCleaners from './components/pages/Accessories/VacuumCleaners';
import Refrigerators from './components/pages/Accessories/Refrigerators';
import Televisions from './components/pages/Accessories/Televisions';
import BreadOvens from './components/pages/Accessories/BreadOvens';
import AccessoriesInfo from './components/pages/Accessories/AccessoriesContent';
import Search from './components/pages/Search/Search';
import PricesInfo from './components/pages/Prices/PricesContent';
import PhonesRepair from './components/pages/Prices/PhonesRepair';
import ComputersRepair from './components/pages/Prices/ComputersRepair';
import MonitorsRepair from './components/pages/Prices/MonitorsRepair';
import VacuumCleanersRepair from './components/pages/Prices/VacuumCleanersRepair';
import RefrigeratorsRepair from './components/pages/Prices/RefrigeratorsRepair';
import TelevisionsRepair from './components/pages/Prices/TelevisionsRepair';
import BreadOvensRepair from './components/pages/Prices/BreadOvensRepair';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="guarantee" element={<Guarantee />} />
            <Route path="accessories/*" element={<Accessories />}>
              <Route index element={<AccessoriesInfo />} />
              <Route path="phones" element={<Phones />} />
              <Route path="computers" element={<Computers />} />
              <Route path="monitors" element={<Monitors />} />
              <Route path="vacuumcleaners" element={<VacuumCleaners />} />
              <Route path="refrigerators" element={<Refrigerators />} />
              <Route path="televisions" element={<Televisions />} />
              <Route path="breadovens" element={<BreadOvens />} />
            </Route>
            <Route path="prices/*" element={<Prices />}>
              <Route index element={<PricesInfo />} />
              <Route path="phonesrepair" element={<PhonesRepair />} />
              <Route path="computersrepair" element={<ComputersRepair />}/>
              <Route path="monitorsrepair" element={<MonitorsRepair />} />
              <Route path="vacuumcleanersrepair" element={<VacuumCleanersRepair />} />
              <Route path="refrigeratorsrepair" element={<RefrigeratorsRepair />} />
              <Route path="televisionsrepair" element={<TelevisionsRepair />} />
              <Route path="breadovensrepair" element={<BreadOvensRepair />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="search" element={<Search />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
