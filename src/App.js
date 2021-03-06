import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/font-awesome.css'
import '../src/assets/css/templatemo-softy-pinko.css'
// icons
import featherItemno1 from '../src/assets/images/featured-item-01.png'
import leftImage from '../src/assets/images/left-image.png'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <div className="">
        {/* git push -u origin main */}
        <Header></Header>
          {/* <!-- ***** Welcome Area Start ***** --> */}
    <div class="welcome-area" id="welcome">

        {/* <!-- ***** Header Text Start ***** --> */}
        <div class="header-text">
            <div class="container"> 
                <div class="row">
                    <div class="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                        <h1>We provide the best <strong>strategy</strong><br/>to grow up your <strong>business</strong></h1>
                        <p>Hsakrap is a professional Web Application Devloper and designed team. We helps you to
                            grow your business with cheepest price.
                        </p>
                        <a href="#features" class="main-button-slider">Discover More</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ***** Header Text End ***** --> */}
    </div>
    {/* <!-- ***** Welcome Area End ***** --> */}
    
    {/* <!-- ***** Features Small Start ***** --> */}
    <section class="section home-feature">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        {/* <!-- ***** Features Small Item Start ***** --> */}
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src={featherItemno1} alt=""/></i>
                                </div>
                                <h5 class="features-title">Modern Strategy</h5>
                                <p>Customize anything in this template to fit your website needs</p>
                            </div>
                        </div>
                        {/* <!-- ***** Features Small Item End ***** --> */}

                        {/* <!-- ***** Features Small Item Start ***** --> */}
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src={featherItemno1} alt=""/></i>
                                </div>
                                <h5 class="features-title">Best Relationship</h5>
                                <p>Contact us immediately if you have a question in mind</p>
                            </div>
                        </div>
                        {/* <!-- ***** Features Small Item End ***** --> */}

                        {/* <!-- ***** Features Small Item Start ***** --> */}
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src={featherItemno1} alt=""/></i>
                                </div>
                                <h5 class="features-title">Ultimate Marketing</h5>
                                <p>You just need to tell your friends about our free templates</p>
                            </div>
                        </div>
                        {/* <!-- ***** Features Small Item End ***** --> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ***** Features Small End ***** --> */}
    {/* <!-- ***** Features Big Item Start ***** --> */}
    <section class="section padding-top-70 padding-bottom-0" id="features">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src={leftImage} class="rounded img-fluid d-block mx-auto" alt="App"/>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                    <div class="left-heading">
                        <h2 class="section-title">Let???s discuss about you project</h2>
                    </div>
                    <div class="left-text">
                        <p>Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="hr"></div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ***** Features Big Item End ***** --> */}

    {/* <!-- ***** Features Big Item Start ***** --> */}
    <section class="section padding-bottom-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                    <div class="left-heading">
                        <h2 class="section-title">We can help you to grow your business</h2>
                    </div>
                    <div class="left-text">
                        <p>Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.</p>
                    </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <img src="assets/images/right-image.png" class="rounded img-fluid d-block mx-auto" alt="App"/>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ***** Features Big Item End ***** --> */}

    <Footer></Footer>
    </div>
  );
}

export default App;
