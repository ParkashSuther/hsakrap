import React from 'react'
class Header extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <header class="header-area header-sticky">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <nav class="main-nav">
                                    {/* <!-- ***** Logo Start ***** --> */}
                                    <a href="" class="logo">
                                        Hsakrap
                                    </a>
                                    {/* <!-- ***** Logo End ***** --> */}
                                    {/* <!-- ***** Menu Start ***** --> */}
                                    <ul class="nav">
                                        <li><a href="#welcome" class="active">Home</a></li>
                                        <li><a href="#features">About</a></li>
                                        <li><a href="#work-process">Work Process</a></li>
                                        {/* <li><a href="#testimonials">Testimonials</a></li> */}
                                        <li><a href="#pricing-plans">Pricing Tables</a></li>
                                        {/* <li><a href="#blog">Blog Entries</a></li> */}
                                        <li><a href="#contact-us">Contact Us</a></li>
                                        <li><a href="register">Register</a></li>
                                        <li><a href="login">Login</a></li>
                                    </ul>
                                    <a class='menu-trigger'>
                                        <span>Menu</span>
                                    </a>
                                    {/* <!-- ***** Menu End ***** --> */}
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
         );
    }
}
 
export default Header;