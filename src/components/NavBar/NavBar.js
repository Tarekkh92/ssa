import React from "react";
import NavImg from "../../images/navImg.png";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import "./NavBar.scss";
import SideBar from "../SideBar/SideBar";

function NavBar() {
  return (
    <div className="nav__area">
      <div className="container">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid ">
            <a class="navbar-brand" href="#">
              <img src={NavImg} alt="" />
            </a>
            <div
              class="navbar-toggler nav__icn__btn"
              // type="button"
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarSupportedContent"
              // aria-controls="navbarSupportedContent"
              aria-expanded="false"
              // aria-label="Toggle navigation"
            >
              <SideBar />
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    RARITY
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    ABOUT
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    ROADMAP
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    TEAM
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    FAQ
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <BsDiscord style={{ fontSize: "14px" }} />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <AiOutlineTwitter style={{ fontSize: "20px" }} />
                  </a>
                </li>
                <li class=" nav__btn  ">
                  <a class="nav-link " href="#">
                    MINT NOW
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
