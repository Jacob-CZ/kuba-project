import './home.css';
import ProductCard from '../../components/ProductCard';
import NavBar from '../../components/NavBar';
import LeftNav from '../../components/LeftNav';
 

function Home() {
  const img = "../../images/0001.png" ;

  return (
    
    <>
    <div>
    <NavBar img="../../images/0001.png"/>
    <LeftNav/>
    </div>
    <div className='productSection'>
    <ProductCard name="giloy" description = "blah blah blah" img={img}/>
    <ProductCard name="giloy" description = "blah blah blah" img={img}/>
    <ProductCard name="giloy" description = "blah blah blah" img={img}/>
    <ProductCard name="giloy" description = "blah blah blah" img={img}/>
    <ProductCard name="giloy" description = "blah blah blah" img={img}/>
    <ProductCard name="giloy" description = "blah blah blah" img={img}/>
    <ProductCard name="giloy" description = "blah blah blah" img={img}/>
    <ProductCard name="giloy" description = "blah blah blah" img={img}/>
    </div>
    </>
    )
}

export default Home