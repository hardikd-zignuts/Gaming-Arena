import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { applySearchFilter, resetFilter } from "../redux/gameActions";

const Search = () => {
  const filterData = useSelector((state) => state.filterData);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [finalFilterArr, setFinalFilterArr] = useState([]); // selected list array
  const [isShow, setIsShow] = useState(true);

  const handleOnChange = (e) => {
    setIsShow(true);
    setValue(e.target.value);

    const filterArr = filterData.filter((item) => {
      if (item.title !== undefined) {
        const searchTerm = value.toLowerCase();
        const title = item.title.toLowerCase();
        return title.startsWith(searchTerm);
      } else {
        return null;
      }
    });
    setFinalFilterArr(filterArr);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };
  const showSortedItems = (e) => {
    e.preventDefault();
    console.log(value);
    console.log(finalFilterArr);
    dispatch(applySearchFilter(value));
    setIsShow(false);
    setValue("");
  };

  return (
    <div className="container ">
      <div className="search-container">
        <div className="search-inner d-flex w-75 mx-auto mt-3">
          <input
            type="text"
            className="form-control mx-2"
            placeholder="Enter game title"
            value={value}
            onFocus={() => dispatch(resetFilter())}
            onChange={handleOnChange}
          />
          <Button
            className="btn btn-outline-success"
            variant="light"
            onClick={showSortedItems}
          >
            Search
          </Button>
        </div>
        <div className="dropdown w-75 mx-auto">
          {isShow &&
            finalFilterArr.map((item, index) => {
              return (
                <div
                  key={`id${index}`}
                  onClick={() => onSearch(item.title)}
                  className="dropdown-row"
                >
                  {item.title}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Search;
