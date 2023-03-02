import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { applyFilter, resetFilter } from "../redux/gameActions";

const SideModal = ({ show, handleClose, setShow }) => {
  const platformList = useSelector((state) => state.platformList);
  const dispatch = useDispatch();
  const [filterInfo, setFilterInfo] = useState({
    response: [],
  });

  const handlePlatformSelect = (e) => {
    const { value, checked } = e.target;
    const { response } = filterInfo;

    if (checked) {
      setFilterInfo({
        response: [...response, value],
      });
    } else {
      setFilterInfo({
        response: response.filter((e) => e !== value),
      });
    }
  };

  const handleApply = () => {
    dispatch(resetFilter());
    dispatch(applyFilter(filterInfo.response));
    setShow(false);
    setFilterInfo({
      response: [],
    });
  };
  const handleReset = () => {
    setShow(false);
    dispatch(resetFilter());
    setFilterInfo({
      response: [],
    });
  };
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sort By Platform</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="flex-grow-0">
          Sorting by platform is a convenient way to narrow down your search
          results and find content that is specifically tailored to your
          preferred platform. By selecting the platform(s) that you are
          interested in from the checkboxes, you can quickly filter out any
          content that is not compatible with your device or operating system.
        </Offcanvas.Body>
        <hr />
        <Offcanvas.Body>
          <div className="d-flex flex-wrap gap-3 p-2 mb-4">
            {platformList.map(({ id, name }) => {
              return (
                <Form.Group key={`id${id}`} controlId={`id${id}`}>
                  <Form.Check
                    id={`id${id}`}
                    type="checkbox"
                    label={name}
                    value={name}
                    onChange={handlePlatformSelect}
                  />
                </Form.Group>
              );
            })}
          </div>
          <div className="d-flex justify-content-between">
            <button
              onClick={handleReset}
              type="reset"
              className="btn btn-outline-primary w-40"
            >
              Clear
            </button>
            <button onClick={handleApply} className="btn btn-primary w-40">
              Apply
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideModal;
