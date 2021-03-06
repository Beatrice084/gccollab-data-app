body{
  font-family: 'Roboto', sans-serif;
  background-image: "url(https://gccollab.ca//mod/gc_splash_page_collab/graphics/Peyto_Lake-Banff_NP-Canada.jpg)";
background-color: #f9f9f9;
  background-size: cover;
  height: 100%;
}

/* svg { position: absolute !important } */

root {
  background-image: "url(https://gccollab.ca//mod/gc_splash_page_collab/graphics/Peyto_Lake-Banff_NP-Canada.jpg)";
  background-size: cover;
  overflow: hidden;
}
html {
  background-color: #f3f3f3;
  background-size: cover;
  height: 100%;
}

.App {
  text-align: center;
  /*text-align: center;*/
  /*background-color: black;*/
  /*background-image: "url(https://gccollab.ca//mod/gc_splash_page_collab/graphics/Peyto_Lake-Banff_NP-Canada.jpg)";*/
  /*font-family: 'Roboto', sans-serif*/
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: #222;
  height: 0px;
  padding: 0px;
  color: white;
}

.App-title {
  font-size: 1.5em;
}

.App-intro {
  font-size: large;
  margin-top: 0px;
  transition-duration: 200;
}

.ind-content-box {
  margin-top: 10px;
}

.title-box-heading {
  background-color: #047177;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media only screen and (max-width: 1175px) and (min-width: 680px){
  .container{
    background-color: lightblue !important;
  }
  #container2{
    /* margin-left: 10px !important; */
    margin-top: 50px !important;
  }
}

@media only screen and (max-width: 689px) and (min-width: 560px){
  .container{
    background-color: lightgreen !important;
  }
  #container2{
    /* margin-left: 28px !important; */
    margin-top: 50px !important;
  }
}

@media only screen and (max-width: 559px) and (min-width: 475px){
  .container{
    background-color: red !important;
  }
  #container2{
    /* margin-left: 33px !important; */
    margin-top: 20px !important;
  }
}

@media only screen and (max-width: 475px) and (min-width: 375px){
  .container{
    background-color: darkblue !important;
  }
  #container2{
    /* margin-left: 28px !important; */
    margin-top: 30px !important;
  }
}  

@media only screen and (max-width: 375px){
  .container{
    background-color: yellow !important;
  }
  #container2{
    /* margin-left: 28px !important; */
    margin-top: 30px !important;
  }
}
