// import Button from 'react-bootstrap/Button';
import logo from '../assets/img/logo.svg'
import { RiArrowDownSLine } from 'react-icons/ri';
import { SideModal } from './index';
import { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import PLATFORM_DATA from '../data/ApiPlatform';



function NavBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const items = PLATFORM_DATA;
    const handleOnSearch = (string, results) => {
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        console.log(result)
    }

    const handleOnSelect = (item) => {
        console.log(item)
    }


    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }


    return (
        <>
            <nav className='d-flex flex-column justify-content-between align-items-center bg-primary flex-md-row p-2'>
                <div className='nav-logo'>
                    Gaming Mania
                    <img src={logo} alt="nav-logo" className='h-100' />
                </div>
                <div className="search-area">
                    <form>
                        <ReactSearchAutocomplete
                            items={items}
                            onSearch={handleOnSearch}
                            onHover={handleOnHover}
                            onSelect={handleOnSelect}
                            autoFocus
                            formatResult={formatResult}
                        />
                        {/* <input type="text" className="form-control" placeholder="Enter game title" /> */}
                    </form>
                </div>
            </nav>
            <div className="container mt-2">
                <button className='btn btn-outline-primary sort-btn' onClick={handleShow}>Platform<RiArrowDownSLine /></button>
                <SideModal show={show} handleClose={handleClose} />
            </div>
        </>
    );
}

export default NavBar;