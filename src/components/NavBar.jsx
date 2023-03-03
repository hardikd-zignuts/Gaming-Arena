import logo from "../assets/img/logo.svg";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { SideModal } from "./index";
import { useDispatch } from "react-redux";
import { resetFilter } from "../redux/gameActions";

function NavBar() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    dispatch(resetFilter());
  };



  return (
    <>
      <nav className="d-flex flex-column justify-content-between align-items-center bg-primary flex-md-row p-2">
        <div className="nav-logo">
          Gaming Arena
          <img src={logo} alt="nav-logo" className="h-100" />
        </div>
      </nav>
      <div className="container mt-2">
        <button
          className="btn btn-outline-primary sort-btn"
          onClick={handleShow}
        >
          Platform
          <RiArrowDownSLine />
        </button>
        <SideModal setShow={setShow} show={show} handleClose={handleClose} />
      </div>
    </>
  );
}

export default NavBar;
