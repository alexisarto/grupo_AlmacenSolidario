import './app.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import PageHeading from './components/PageHeading';
import ContentRow from './components/ContentRow';
import Content from './components/Content';
import Footer from './components/Footer';
import AllTheProductsInTheDBTitle from './components/AllProductsInTheDBTitle';
import TodosLosProductos from './components/TodosLosProductos';



function App() {
  return (
    <div id="wrapper">
      <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
              <div className="container-fluid">
                <PageHeading />
                <ContentRow />
                <Content />
                <AllTheProductsInTheDBTitle />
                <TodosLosProductos />
              </div>
          </div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
