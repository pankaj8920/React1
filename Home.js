import React,{useState,useEffect} from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle,faArrowLeft,faArrowRight, faSquare, faCaretUp, faStar } from '@fortawesome/free-solid-svg-icons';



const Home = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const slides = document.querySelectorAll('.kal');

  useEffect(() => {
    showSlides();
  } );
  function showSlides() {
    slides.forEach((kal, index) => {
      if (index === slideIndex) {
        kal.style.display = 'block';
      } else {
        kal.style.display = 'none';
      }
    });
  }

  function prevSlide() {
    if (slideIndex === 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  }

  function nextSlide() {
    if (slideIndex === slides.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }



  return (
    <div className='Home'>
      <div className="color">

      </div>
      <div className="next"></div>

      <div className='line1'>
        <h4>NEYMAN</h4> <br />
        <hr />
        {/* <h2 className="class">Home</h2>  <hr /> */}
        <div className="accordion-item">
          <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

              Home
            </button>
          </h2> <br />
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">

            <div className="name1">
              <strong>Office and remotely. <br /> Computer and mobile. <br /> For everyone.</strong> <br /> <br /> We offer solutions in the field of <br />digital infrastructure management , <br />client  communication and service.
            </div>
          </div>
        </div> <br /> <br />
        <hr />




        {/* <h2 className="class">Service</h2>  <hr /> */}
        <div class="accordion-item">
          <h2 class="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

              Services
            </button>
          </h2>

          <div id="collapseTwo" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
          <FontAwesomeIcon icon={faArrowLeft} onClick={prevSlide} />
          <FontAwesomeIcon icon={faArrowRight} onClick={nextSlide}  /> 
             <div className='kal'>
            {/* <FontAwesomeIcon icon={faArrowLeft} onClick={'prevSlide'} /> */}
            <strong><h3 className="number">01</h3> Introduction <br /><h3 className="number">02</h3>Training <br /><h3 className="number">03</h3>Support</strong>
             {/* <FontAwesomeIcon icon={faArrowRight} onClick={'nextSlide'} />  */}
            </div>
          </div><br />
          
          <div id="collapseTwo" className="accordion-collapse collapse kal" data-bs-parent="#accordionExample">


            <h2 className='manage'>Management</h2>
            <div className="col">
              <div className="col1">
                <FontAwesomeIcon icon={faCircle} />
                <h3 className="font my-1">Contact Center</h3> <br /> <br />
                <FontAwesomeIcon icon={faSquare} />
                <h3 className="font ">Procurement</h3>
              </div>
              <div className="col2">
                <FontAwesomeIcon icon={faCaretUp} />
                <h3 className="font my-1">IT Service</h3> <br /> <br />
                <FontAwesomeIcon icon={faStar} />
                <h3 className="font ">Beyond IT</h3>
              </div>
            </div>
          </div>

        </div><hr />




      </div>

      
      <h2 className="class">Contact <button className='login'>Login</button></h2> <hr className='jo' />
      <h2 className="class">About us  <span className="tag">Help</span></h2>  <hr className='jo' />

    </div>


  )
}
export default Home;
