import {React,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from './Popup';
import Style from '../styles/Home.module.css';

function index() {
  const hide = useState(false);

  const show = true;

  const HideValue = () => {
    var x = document.getElementById('show');
    if (hide === true) {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
  }

  const ShowValue = () => {
    var x = document.getElementById('show');
    if (show === true) {
      x.style.display = "block";
    }
  }
  return (
    <>
    <div className='Sign-in'>
        <nav className='navbar navbar-expand-lg bg-info fixed-top'>
          <div className='container'>
            <div className='navbar-brand'>Resturent</div>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-list'>
                <button className='btn btn-primary' onClick={() => { ShowValue() }}>Sing In</button>
                <button className='btn btn-primary ms-5' onClick={() => { HideValue() }}>Sing Out</button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Star section */}

        <section className={Style.starmenu}>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='display-3 text-warning' id='startext'>Skip boring food and indulge in flavoursome Wraps, Meals and Bowls!</div>
              </div>
              <div className='col-lg-6'>
                <div id='show' className='addup'>
                  <div className='container'>
                    <Popup hide={HideValue} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default index