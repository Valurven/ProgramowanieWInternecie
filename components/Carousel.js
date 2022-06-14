class Carousel extends HTMLElement {
    constructor(){
      super();
}    
    connectedCallback(){
      this.innerHTML = `
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
    
        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div class="item active">
            <img  src="images/Belphegorrs.webp" alt="carousel1" style="height:800px;">
          </div>

          <div class="item">
            <img  src="images/ImpSlider.jpg" alt="carousel2" style="height:800px">
          </div>

          <div class="item">
            <img  src="images/ZombuulSlider.png" alt="carousel3" style="height:800px;">
          </div>
        
          
        </div>
    
        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      `;
    }
}
  
  customElements.define('c-arousel', Carousel);
