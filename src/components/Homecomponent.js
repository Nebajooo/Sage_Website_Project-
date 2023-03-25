import React, { Component } from 'react';
 import One from './img/hero-banner.png';
 import Two from './img/hero-abs-1.png';
 import Three from './img/hero-abs-2.png';
 import Banner1 from './img/cta-banner.jpg';
 import Banner11 from './img/cta-bg.png';
 import About1 from './img/about-icon-1.png';
 import About2 from './img/about-icon-2.png';
 import About3 from './img/about-icon-3.png';
 import About11 from './img/about-banner.jpg';
 import About12 from './img/about-abs-1.jpg';
 import About13 from './img/about-abs-2.jpg';
 import Home from './img/hero-bg.jpg';
 import Event from './img/event-1.jpg';
 import Event1 from './img/event-2.jpg';
 import Event2 from './img/event-3.jpg';


class Homecomponent extends Component {
   
    render() {
        return (
            <div>
<main>
      <article>
      

        <section
          className="hero"
          id="home"
          aria-label="hero"
          Style = {{
            backgroundImage:'url('+ Home +')'}}>
          <div className="container">
            <div className="hero-content">
              <p className="section-subtitle">Better Learning Future With Us</p>

              <h2 className="h2 hero-title">
                Education Is About Academic Excellence
              </h2>

              <p className="hero-text">
                Sed eu volutpat arcu, a tincidunt nulla quam, feugiat sit amet
                ipsum a, dapibus porta velit.
              </p>

              <a href="#" className="btn btn-primary">
                <span className="span">Get Started Today</span>

                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"></ion-icon>
              </a>
            </div>

            <figure className="hero-banner">
              <img src={One} width="500" height="500" loading="lazy" alt="hero image" className="w-100" /> 

              <img
                src={Two}
                width="318"
                height="352"
                loading="lazy"
                aria-hidden="true"
                className="abs-img abs-img-1"
              />

              <img
                src={Three}
                width="160"
                height="160"
                loading="lazy"
                aria-hidden="true"
                className="abs-img abs-img-2"
              />
            </figure>
          </div>
        </section>

       
        <section className="section category" aria-label="category">
          <div className="container">
            <p className="section-subtitle">Course Categories</p>

            <h2 className="h2 section-title">Popular Topics To Learn</h2>

            <ul className="grid-list">
              <li>
                <div className="category-card">
                  <div className="card-icon">
                    <ion-icon name="briefcase-outline"></ion-icon>
                  </div>

                  <div>
                    <h3 className="h3 card-title">
                      <a href="#">Languages</a>
                    </h3>

                    <span className="card-meta">39 Course</span>
                  </div>
                </div>
              </li>

            

              <li>
                <div className="category-card">
                  <div className="card-icon">
                    <ion-icon name="color-palette-outline"></ion-icon>
                  </div>

                  <div>
                    <h3 className="h3 card-title">
                      <a href="#">Graphics Design</a>
                    </h3>

                    <span className="card-meta">39 Course</span>
                  </div>
                </div>
              </li>

              <li>
                <div className="category-card">
                  <div className="card-icon">
                    <ion-icon name="layers-outline"></ion-icon>
                  </div>

                  <div>
                    <h3 className="h3 card-title">
                      <a href="#">Business Management</a>
                    </h3>

                    <span className="card-meta">39 Course</span>
                  </div>
                </div>
              </li>

              <li>
                <div className="category-card">
                  <div className="card-icon">
                    <ion-icon name="laptop-outline"></ion-icon>
                  </div>

                  <div>
                    <h3 className="h3 card-title">
                      <a href="#">Web Development</a>
                    </h3>

                    <span className="card-meta">39 Course</span>
                  </div>
                </div>
              </li>


              <li>
                <div className="category-card">
                  <div className="card-icon">
                    <ion-icon name="headset-outline"></ion-icon>
                  </div>

                  <div>
                    <h3 className="h3 card-title">
                      <a href="#">Digital Marketing</a>
                    </h3>

                    <span className="card-meta">39 Course</span>
                  </div>
                </div>
              </li>

              <li>
                <div className="category-card">
                  <div className="card-icon">
                    <ion-icon name="server-outline"></ion-icon>
                  </div>

                  <div>
                    <h3 className="h3 card-title">
                      <a href="#">Data Sciences</a>
                    </h3>

                    <span className="card-meta">39 Course</span>
                  </div>
                </div>
              </li>

             
            </ul>
          </div>
        </section>

    
        <section className="section about" id="about" aria-label="about">
          <div className="container">
            <figure className="about-banner">
              <img
                src={About11}
                width="450"
                height="590"
                loading="lazy"
                alt="about banner"
                className="w-100 about-img"
              />

              <img
                 src={About12}
                width="188"
                height="242"
                loading="lazy"
                aria-hidden="true"
                className="abs-img abs-img-1"
              />

              <img
                 src={About13}
                width="150"
                height="200"
                loading="lazy"
                aria-hidden="true"
                className="abs-img abs-img-2"
              />
            </figure>

            <div className="about-content">
              <p className="section-subtitle">Who We Are</p>

              <h2 className="h2 section-title">We Offer The Best Carrier</h2>

              <ul className="about-list">
                <li className="about-item">
                  <div className="item-icon item-icon-1">
                    <img
                      src={About1}
                      width="30"
                      height="30"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="h3 item-title">Industry Expert Instructor</h3>

                    <p className="item-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      eiusmoded tempor incididunt dolore magna aliqua.
                    </p>
                  </div>
                </li>

                <li className="about-item">
                  <div className="item-icon item-icon-2">
                    <img
                      src={About2}
                      width="30"
                      height="30"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="h3 item-title">Up-to-Date Course Content</h3>

                    <p className="item-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      eiusmoded tempor incididunt dolore magna aliqua.
                    </p>
                  </div>
                </li>

                <li className="about-item">
                  <div className="item-icon item-icon-3">
                    <img
                      src={About3}
                      width="30"
                      height="30"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="h3 item-title">Biggest Student Community</h3>

                    <p className="item-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      eiusmoded tempor incididunt dolore magna aliqua.
                    </p>
                  </div>
                </li>
              </ul>

              <a href="#" className="btn btn-primary">
                <span className="span">Know About Us</span>

                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true" ></ion-icon>
              </a>
            </div>
          </div>
        </section>

      
        

      

        <section
          className="section cta"
          aria-label="workshop"
          style={{backgroundImage:'url('+ Banner11 +')'}}
        //   style="background-image: url('../assets/images/cta-bg.png')"
        >
          <div className="container">
            <figure className="cta-banner">
            <img
                src={Banner1}
                width="580"
                height="380"
                loading="lazy"
                alt="cta banner"
                class="img-cover"
              />
            </figure>

            <div className="cta-content">
              <p className="section-subtitle">Free Workshop</p>

              <h2 className="h2 section-title">Join Our Free Workshops</h2>

              <p className="section-text">
              The training is 100% supported by practice and has more than 15 projects in it, 
              and on-the-job training is also facilitated. 

              </p>

              <a href="#" className="btn btn-secondary">
                <span className="span">Upcomming Workshop</span>

                <ion-icon name="arrow-forward-outline" aria-hidden="true" ></ion-icon>
              </a>
            </div>
          </div>
        </section>

      

        <section className="section event" id="event" aria-label="event">
          <div className="container">
            <p className="section-subtitle">Upcomming Event</p>

            <h2 className="h2 section-title">Let’s Join Our Community</h2>

            <ul className="grid-list">
            <marquee class="marq" id="scroll_news2"
                 direction="right"
                 scrollamount={10}
                 loop="">   <li  onMouseOver={() => document.getElementById('scroll_news2').stop()} onMouseOut={() => document.getElementById('scroll_news2').start()}>
                <div className="event-card">
                  <figure className="card-banner">
                    <img
                      src={Event}
                      width="370"
                      height="250"
                      loading="lazy"
                      alt="Innovation and Technological Entrepreneurship Team"
                      className="img-cover"
                    />
                  </figure>

                  <time className="badge" datetime="2022-12-04">04 Dec 2022</time>

                  <div className="card-content">
                    <address className="card-address">
                      <ion-icon name="location-outline" aria-hidden="true" ></ion-icon>

                      <span className="span">Alpaca Way Anaheim, CA 92805</span>
                    </address>

                    <h3 className="h3">
                      <a href="#" className="card-title" >Innovation & Technological Entrepreneurship Team</a >
                    </h3>

                    <a href="#" className="btn-link">
                      <span className="span">Get Ticket</span>

                      <ion-icon name="arrow-forward-outline" aria-hidden="true" ></ion-icon>
                    </a>
                  </div>
                </div>
              </li>
              </marquee>
              <marquee class="marq" id="scroll_news1"
                 direction="right"
                 scrollamount={10}
                 loop=""> <li  onMouseOver={() => document.getElementById('scroll_news1').stop()} onMouseOut={() => document.getElementById('scroll_news1').start()}>
                <div className="event-card">
                  <figure className="card-banner">
                    <img
                      src={Event1}
                      width="370"
                      height="250"
                      loading="lazy"
                      alt="Virtual Spring Part-time Jobs Fair for Student"
                      className="img-cover"
                    />
                  </figure>

                  <time className="badge" datetime="2022-10-30">30th Oct 2022</time>

                  <div className="card-content">
                    <address className="card-address">
                      <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Ritter Avenue Detroit, MI 48226</span>
                    </address>

                    <h3 className="h3">
                      <a href="#" className="card-title" >Virtual Spring Part-time Jobs Fair for Student</a>
                    </h3>

                    <a href="#" className="btn-link">
                      <span className="span">Get Ticket</span>

                      <ion-icon name="arrow-forward-outline" aria-hidden="true" ></ion-icon>
                    </a>
                  </div>
                </div>
              </li></marquee> 
              <marquee id="scroll_news" class="marq"
                 direction="left"
                 scrollamount={10}
                 loop="">
                 
              <li style={{display:`inline`}} onMouseOver={() => document.getElementById('scroll_news').stop()} onMouseOut={() => document.getElementById('scroll_news').start()}>
               <div style={{display:`inline`}} className="event-card" >
                  <figure className="card-banner" style={{display:`inline`}}>
                    <img
                      src={Event2}
                      width="370"
                      height="250"
                      loading="lazy"
                      alt="Explorations of Regional Chief Executive Network"
                      className="img-cover"
                    />
                  </figure>

                  <time className="badge" datetime="2022-09-18">18th Sep 2022</time>

                  <div className="card-content" style={{display:`inline`}}>
                    <address className="card-address">
                      <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Stout Street York, PA 17401</span>
                    </address>

                    <h3 className="h3">
                      <a href="#" className="card-title">Explorations of Regional Chief Executive Network</a>
                    </h3>

                    <a href="#" className="btn-link">
                      <span className="span">Get Ticket</span>

                      <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </a>
                  </div>
               
                </div>
              </li></marquee> 
            </ul>
          </div>
        </section>

      
        <section
          className="section newsletter"
          aria-label="newsletter">
          <div className="container-xxl py-5">
            <div className="container">
            <p className="section-subtitle">Contact Us</p>

            <h2 className="h2 section-title">Contact</h2>
{/* style={{backgroundImage: "url(" + Back + ")"}} */}
          
               
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-4">
                                <h4 className="section-title text-start text-primary text-uppercase"><b>Phone</b>
                                <p style={{color:`black`, fontSize:`2.5vh`}}><i className="fa fa-phone-alt text-primary me-2"></i>+251906 7777 99 / +251906 7777 55</p>
                            </h4></div>
                            <div className="col-md-4">
                                <h4 className="section-title text-start text-primary text-uppercase"><b>Email</b>
                                <p style={{color:`black`, fontSize:`2.5vh`}}><i className="fa fa-envelope-open text-primary me-4"></i>info@example.com</p>
                           </h4> </div>
                            <div className="col-md-4">
                                <h4 className="section-title text-start text-primary text-uppercase"><b>Address</b>
                                <p style={{color:`black`, fontSize:`2.5vh`}}><i className="fa fa-address-book text-primary me-4"></i>Piazza Churchill Street, Eliana Hotel, 2nd floor</p>
                           </h4> </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
					<iframe className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1314.94097177946!2d38.75041814972387!3d9.029970024300004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f137eb0829%3A0xc367647315386be6!2sEliana%20Hotel%20%7C%20Piazza!5e0!3m2!1sen!2suk!4v1678956983923!5m2!1sen!2suk"
							frameborder="0" style={{minHeight: `350px`, border:`0`}} allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                    </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form  className='contactForm' >
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control text" id="name" placeholder="Your Name"/>
                                           
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control text" id="email" placeholder="Your Email"/>
                                            
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                            
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: `160px`}}></textarea>
                                          
                                        </div>
                                    </div>
                                    <div className="col-12">
                                <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            
        </div>

      


          </div>
        </section>
      </article>
    </main>
</div>
    );
    }
}

export default Homecomponent;