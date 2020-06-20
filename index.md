<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./style.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
    />
    <title>Rodrigo Valerdi</title>
  </head>
  <body>
    <nav>
      <div class="home"><a class="home-link" href="/">Rodrigo Valerdi</a></div>
      <div class="hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
        <ul class="nav-links">
          <li><a class="link" href="#about">About</a></li>
          <li><a class="link" href="#videos">Videos</a></li>
          <li><a class="link" href="#contact">Contact</a></li>
        </ul>
    </nav>
    <section class="landing">
      <div class="landing-content">
        <h1>I Will Help You Make Your Life Easier</h1>
        <div class="video-surround">
          <video class="main-video"
            controls
            controlsList="nodownload"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          >
            <source src="./videos/test.mp4" type="video/mp4" />
          </video>  
        </div>
      </div>
      
    </section>
    <section class="content">
      <div id="about">
        <h1 class="header-title">I'm Rodrigo!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         <p>Deserunt quas ex vero, corporis nostrum ipsa ipsam ipsum labore eos.</p>
        <p>sed quidem adipisci cupiditate distinctio laborum voluptatem totam corrupti maiores error.</p>
      </div>
      <div id="videos">
        <h1 class="header-title videos">Latest Videos</h1>

        <div class="video-grid">
          <div class="video-block">
            <video class="recent-video"
              controls
              controlsList="nodownload"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            >
                <source src="videos/test-en.mp4" type="video/mp4" />
              </video>
            <div class="video-thumb">
              <h3>What To Do At An Airport</h3>
              <p class="video-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div> 
          </div>
          <div class="video-block">
            <video class="recent-video"
              controls
              controlsList="nodownload"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            >
                <source src="videos/test.mp4" type="video/mp4" />
              </video>
            <div class="video-thumb">
              <h3>Getting Your SSN</h3>
              <p class="video-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div> 
          </div>
          <div class="video-block">
            <video class="recent-video"
              controls
              controlsList="nodownload"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            >
                <source src="videos/test-en.mp4" type="video/mp4" />
              </video>
            <div class="video-thumb">
              <h3>How To Avoid Pyramid Schemes</h3>
              <p class="video-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div> 
          </div>
        </div>
      </div>

      <div id="contact">
        <h1 class="header-title">Contact</h1>
          <p>For email enquiries please contact: <a class="contact-link" href="mailto:rodrigo.valerdi@gmail.com">rodrigo.valerdi@gmail.com</a></p>
          <p>Or reach out to me directly:
            <a class="contact-link" href="tel:123-456-7890">123-456-7890</a>
          </p>
          <p>Connect With Me Today!</p>
        </div>
      


      
    </section>
    <hr class="style-one">
    <section class="footer">
      <ul class="social-media">
        <li><a href="https://youtube.com"><i class="fab fa-youtube"></i></a></li>
        <li><a href="https://linkedin.com"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="https://facebook.com"><i class="fab fa-facebook"></i></a></li>
      </ul>
      <div class="copyright">
        <p>@Copyright 2020. All Rights Reserved.</p>
      </div>
      <div class="footer-elements">
        <a class="footer-nav-element" href="error.html">Privacy Policy</a> | 
        <a class="footer-nav-element" href="error.html">Terms And Conditions</a> | 
        <a class="footer-nav-element" href="error.html">Contact</a>
      </div>
    </section>
    <script src="app.js"></script>
  </body>
</html>
