// import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/TopNavbar';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Infobox from './components/Infobox';
import Infodetails from './components/Infodetails';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
function CreateInfo(Infodetails){
  return<Infobox
    key={Infodetails.id}
    icon={Infodetails.icon}
    title={Infodetails.title}
    desc={Infodetails.desc}
    />
}
function App() {
return (
  <div className="app">
      <TopNavbar />
      <Navbar />
      <Carousel />
    <div className="container">
    {Infodetails.map(CreateInfo)} 
{/*     
      <Infobox 
      icon={Infodetails[0].icon}
      title={Infodetails[0].title}
      desc={Infodetails[0].desc}
      />
      <Infobox 
      icon={Infodetails[1].icon}
        title={Infodetails[1].title}
        desc={Infodetails[1].desc}
      />
      <Infobox 
      icon={Infodetails[2].icon}
        title={Infodetails[2].title}
        desc={Infodetails[2].desc}
      />      */}
      </div>
  
    <div className="product-container">
    
    <ProductCard 
      img={ProductDetails[0].img}
      title={ProductDetails[0].title}
      price={ProductDetails[0].price}
    />
    <ProductCard 
      img={ProductDetails[1].img}
      title={ProductDetails[1].title}
      price={ProductDetails[1].price}
    />
    <ProductCard 
      img={ProductDetails[2].img}
      title={ProductDetails[2].title}
      price={ProductDetails[2].price}
    />
    <ProductCard 
      img={ProductDetails[3].img}
      title={ProductDetails[3].title}
      price={ProductDetails[3].price}
    />
    <ProductCard 
      img={ProductDetails[4].img}
      title={ProductDetails[4].title}
      price={ProductDetails[4].price}
    />
    <ProductCard 
      img={ProductDetails[5].img}
      title={ProductDetails[5].title}
      price={ProductDetails[5].price}
    />
    <ProductCard 
      img={ProductDetails[6].img}
      title={ProductDetails[6].title}
      price={ProductDetails[6].price}
    />
    <ProductCard 
      img={ProductDetails[7].img}
      title={ProductDetails[7].title}
      price={ProductDetails[7].price}
    />
    </div>
  </div>
    
);
}

export default App;
