import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Form } from 'react-bootstrap';


const SideModal = ({ show, handleClose }) => {

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Sort By Platform</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='flex-grow-0'>
                    Sorting by platform is a convenient way to narrow down your search results and find content that is specifically tailored to your preferred platform. By selecting the platform(s) that you are interested in from the checkboxes, you can quickly filter out any content that is not compatible with your device or operating system.
                </Offcanvas.Body>
                <hr />
                <Offcanvas.Body>
                    <div className="d-flex flex-wrap gap-3 p-2 mb-4" >
                        <Form.Group controlId="box1">
                            <Form.Check id='box1' type="checkbox" label="Woodland" />
                        </Form.Group>
                        <Form.Group controlId="box2">
                            <Form.Check id='box2' type="checkbox" label="Woodland" />
                        </Form.Group>
                        <Form.Group controlId="box3">
                            <Form.Check id='box3' type="checkbox" label="Woodland" />
                        </Form.Group>
                        <Form.Group controlId="box4">
                            <Form.Check id='box4' type="checkbox" label="Woodland" />
                        </Form.Group>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type='reset' className="btn btn-outline-primary w-40">Clear</button>
                        <button className="btn btn-primary w-40">Apply</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SideModal
