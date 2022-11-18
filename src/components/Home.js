import React from 'react'
// import logo from '../images/logo.png';


export default function Home() {
  return (
    <div>
     
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#" >
  {/* <img  mt-0 width="200px" height="auto" className="img-responsive" src={logo}  alt="logo" /> */}
  </a>
  
  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto m-auto mt-lg-5">
      <li class="nav-item active">
        <a class="nav-link" href="#">Մենյու</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Մեր մասին</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Կապ</a>
      </li>
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0 " type="submit">Փնտրել</button>
    </form> */}
    <div style={{height:'100vh'}}>
    {/* <img src="" class="img-fluid"  /> */}
    </div>
  </div>
</nav>

    </div>
  )
}
