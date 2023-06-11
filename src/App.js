import React  from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LineChart from './components/lineChart/index';
import BarChart from './components/barChart/index';
import PieChart from './components/pieChart/index';
import Header from "./components/Header"
import Home from './components/Home';
import TablewithDropdown from './components/table/index'
import ContactForm from './components/contact/index';
import DataGrid from './pages/dataGrid/index';
import Download from './components/download/index';
import Excel from './components/excel/index';
import SparkLines from './components/sparkLines';


const  App = () => {
  let data = [
    {
      category: "Research",
      value1: 1000,
      value2: 588
    },
    {
      category: "Marketing",
      value1: 1200,
      value2: 1800
    },
    {
      category: "Sales",
      value1: 850,
      value2: 1230
    }
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sparkLines' element={<SparkLines />} />
          <Route path='/lineChart' element={<LineChart />} />
          <Route path='/barChart' element={<BarChart data={data} />} />
          <Route path='/pieChart' element={<PieChart chartID="pie-two" />} />
          <Route path='/table' element={<TablewithDropdown />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/data-grid' element={<DataGrid />} />
          <Route path='/download' element={<Download />} />
          <Route path='/excel' element={<Excel />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
