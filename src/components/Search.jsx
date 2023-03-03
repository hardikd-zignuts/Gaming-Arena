import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const Search = () => {
  const filterData = useSelector((state) => state.filterData);
  const [value, setValue] = useState("");
  const [demo, setDemo] = useState([]);

  // const handleOnChange = (e) => {
  //   const { value } = e.target;
  //   const sorted = filterData.filter((item, index) => {
  //     if (index === 0) {
  //       return false;
  //     } else {
  //       return item.title.toLowerCase() === value.toLowerCase();
  //     }
  //   });
  //   console.log(sorted);
  // };

  const handleOnChange = (e) => {
    setValue(e.target.value);

    let temp = filterData
      .filter((item) => {
        if (item.title !== undefined) {
          const searchTerm = value.toLowerCase();
          const title = item.title.toLowerCase();
          return title.startsWith(searchTerm);
        } else {
          return null;
        }
      })
      .map((item) => {
        return <div>{item.title}</div>;
      });
    setDemo(temp);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
  };

  return (
    <div className="container ">
      <div className="search-container">
        <div className="search-inner d-flex w-75 mx-auto mt-3">
          <input
            type="text"
            className="form-control mx-2"
            placeholder="Enter game title"
            onChange={handleOnChange}
          />
          <Button
            className="btn btn-outline-success"
            variant="light"
            type="submit"
          >
            Search
          </Button>
        </div>
        <div className="dropdown w-75 mx-auto">
          {console.log(demo)}
          {demo}
          {
            // filterData.filter((item) => {
            //   if (item.title !== undefined) {
            //     const searchTerm = value.toLowerCase();
            //     const title = item.title.toLowerCase();
            //     return title.startsWith(searchTerm);
            //   } else {
            //     return null;
            //   }
            // })
            // .map((item) => {
            //   return (
            //     <div
            //       onClick={() => onSearch(item.title)}
            //       className="dropdown-row"
            //       key={item.title}
            //     >
            //       {item.title}
            //     </div>
            //   );
            // })
          }
        </div>
      </div>
    </div>
  );
};

export default Search;
