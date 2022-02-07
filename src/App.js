import logo from './logo.svg';
import './App.css';
import Nav from './component/navigation/Nav';
import Blog from './component/blog-main/Blog';
import DataEngineering from './component/blog-main/DataEngineering';
import DataAnalytics from './component/blog-main/DataAnalytics';
import DataBase from './component/blog-main/DataBase';
import CloudData from './component/blog-main/CloudData';
import AppDevelopment from './component/blog-main/AppDevelopment';
import WebDevelopment from './component/blog-main/WebDevelopment';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    {/* <Nav/> */}
    {/* <Blog/> */}
    {/* <DataEngineering/> */}
    {/* <DataAnalytics/> */}
    {/* <DataBase/> */}
    {/* <CloudData/> */}
    {/* <AppDevelopment/> */}
    {/* <WebDevelopment/> */}
    { <BrowserRouter>
        
        <Routes>
         <Route path="/blogs" element={<Blog/>}/>/
         <Route path="/" element={<Blog/>}/>/
         <Route path="/engineering" element={<DataEngineering/>}/>
         <Route path="/analytics" element={<DataAnalytics/>}/>
         <Route path="/base" element={<DataBase/>}/>
         <Route path="/cloud" element={<CloudData/>}/>
         <Route path="/data" element={<CloudData/>}/>
         <Route path="/app" element={<AppDevelopment/>}/>
         <Route path="/web" element={<WebDevelopment/>}/>


        </Routes>
       </BrowserRouter>
        }

    </div>
  );
}

export default App;
