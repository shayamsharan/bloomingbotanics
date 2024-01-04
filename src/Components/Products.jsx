import React from 'react';
import {Link} from 'react-router-dom'
import '../Assets/Products.css';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Watering Can', price: '$12.50', image: 'https://cdn.shopify.com/s/files/1/0813/0828/7252/products/OrganicBazar-Watering-Can5-1.jpg?v=1694167711&width=360' },
  { id: 2, name: 'Gardening Gloves', price: '$6.75', image: 'https://cdn.shopify.com/s/files/1/0813/0828/7252/products/Garden-Gloves-with-Claws-for-Digging-Planting-4.jpg?v=1694168893&width=360' },
  { id: 3, name: 'Gardening Cutter', price: '$22.50', image: 'https://organicbazar.net/cdn/shop/products/purple-Multipurpose-Gardening-Cutter-Scissor-Hand-Pruner-2.jpg?v=1694167834&width=360'},
  { id: 4, name: 'Fork & Trowel', price: '$17.55', image: 'https://www.nationbloom.com/wp-content/uploads/2023/11/garden-tool-kit-for-soil-cultivation.jpg' },
  { id: 5, name: 'Plant Pot', price: '$24.99', image: 'https://www.ugaoo.com/cdn/shop/files/AImageWithPlant_17e64143-480c-49af-ae61-43cfcf584282.jpg?v=1689239821&width=375' },
  { id: 6, name: 'Wheel Barrow', price: '$30.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirx8b8Knqb6K2bEVulzuIFPToJHMum-gi0w&usqp=CAU' },
];

function Products() {
  const navigate = useNavigate();
  const Notify = () => alert('Purchase Successful');
  const Notifier = () => {
    alert('Logout Successful') ;
    navigate("/")
  }
  return (
    <div className="Products">
      
      <div className="sidebar">
        <h2>  Blooming Botanics</h2>
        <ul>
        <Link to="/home"><br/><br/><br/><li><a href="/">Home</a><br/><br/></li></Link>
        <Link to="/contact"><br/><br/><li><a href="/">Contact us</a><br/><br/></li></Link>
        <Link to="/about"><br/><br/><li><a href="/">About us</a><br/><br/></li></Link>
        <Link to="/home"><br/><br/><li><a href="/" onClick={Notifier}>Logout</a><br/><br/></li></Link>
        </ul>
      </div>

      <div className="main-content">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={Notify} > Buy </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;