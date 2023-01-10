
import './App.css';
import { FaAmazonPay, FaApplePay,FaAws,FaBattleNet,FaBuyNLarge ,FaEllo, FaGithub , FaFacebookSquare} from "react-icons/fa";

import Form from './component/Form';


function App() {
  return (
    <div className='content'>
    < Header />
    < Pricing />
    < Icons />
    <Form/>
    <Footer/>
</div>
  );
}

export default App;

function Header(){
  return(
    <div className='header-space'>
      <div className='header'>
    <h4>Opalin</h4>
    <p>Home</p>
    <p>Pricing</p>
    <p>About</p>
    </div>
    <div className='login-but'>
    <button className='button-alt'>Log in</button>
    <button className='button-alt'>Sign up</button>
    </div>
    </div>
  );
}


function Pricing(){
  return(
    <div className='pricing-tg'>
      <h3 className='heading'>Find the perfect plan for your business</h3>
      <div className='cards'>
        <div className='card'>
          <p>Free Forever</p>
          <h3>Free</h3>
          <p>ut enim ad minima veniam,quis nostrum exercitation</p>
          <ul>
            <li>At vero eos et accusaion</li>
            <li>odio digssiomons ducinums</li>
            <li>Blandities pressentium</li>
          </ul>
          <button>Sign up for free</button>
        </div>

        <div className='card'>
          <p>For Terms</p>
          <h3>$20</h3>
          <p>ut enim ad minima veniam,quis nostrum exercitation</p>
          <ul>
            <li>At vero eos et accusaion</li>
            <li>odio digssiomons ducinums</li>
            <li>Blandities pressentium</li>
          </ul>
          <button>Start 14-day Trial</button>
        </div>

        <div className='card'>
          <p>For Enterprises</p>
          <h3>$140</h3>
          <p>ut enim ad minima veniam,quis nostrum exercitation</p>
          <ul>
            <li>At vero eos et accusaion</li>
            <li>odio digssiomons ducinums</li>
            <li>Blandities pressentium</li>
          </ul>
          <button>Start 14-day Trial</button>
        </div>

      </div>
    </div>
  )
}

function Icons(){
  return(
    <div className='icons-obj'>
    <div className='ico-one'>
  
  
  <h6><FaAmazonPay size="4em"/> <br></br> Amazon pay
  <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
  </h6>
  <h6><FaApplePay size="4em"/> <br></br>
    Amazon pay
  <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
  </h6>
  <h6> <FaAws size="4em"/><br></br>
   Amazon pay
  <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
  </h6>
  <h6> <FaBattleNet size="4em"/><br></br>
    Amazon pay
  <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
  </h6>
   </div>

  <div className='ico-two'>
  <h6><FaBuyNLarge size="4em"/><br></br>
    Amazon pay
  <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
  </h6>
  <h6><FaEllo size="4em"/><br></br>
    Amazon pay
  <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
  </h6>
  <h6><FaGithub size="4em"/><br></br>
    Amazon pay
  <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
  </h6>
  <h6> <FaFacebookSquare size="4em"/><br></br>
    Amazon pay
  <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
  </h6>
  </div>
  </div>
  )
}

function Footer(){
  return(
    <div className='footer'>
      <div className='opelin-footer'>
      <h5>Opalin®</h5>
      <p>We are a completely remote cmpany,working across twenty countries with over 20,000 customers</p>
      </div>
      <div className='info'>
        <h5>Info</h5>
        <ol>
          <li>Getting Started</li>
          <li>Resources</li>
          <li>Design</li>
          <li>Tutorials</li>
          <li>Pricing</li>

        </ol>
      </div>

      <div className='support'>
        <h5>Connect</h5>
        <ol>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Medium</li>
        </ol>

      </div>
    </div>
  )
}