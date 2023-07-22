import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardsData";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import { NavLink } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  const inpdata = useRef(null);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  function SearchData(val) {
    const filterData = Cardsdata.filter((item) => {
      return item.rname.toLowerCase().includes(val.toLowerCase());
    });

    setData(filterData);
  }

  return (
    <div className="container mt-3">
      <div className="search-bar d-flex justify-content-between align-items-center">
        <h2 className="text-center">E-Commerce Cart </h2>
        <div className="search-box d-flex justify-content-center align-items-center gap-3 ">
          <input
            type="text"
            placeholder="Seach Item"
            style={{ padding: 5, outline: "none", borderRadius: 5 }}
            ref={inpdata}
            onChange={() => SearchData(inpdata.current.value)}
          />
          <Button
            variant="outline-primary"
            onClick={() => SearchData(inpdata.current.value)}
          >
            Search
          </Button>
        </div>
      </div>

      <div className="row d-flex  justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <Card
              key={id}
              style={{ width: "22rem", border: "none" }}
              className="mx-2 mt-4 card_style"
            >
              <NavLink to={`/carts/${element.id}`}>
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
              </NavLink>

              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Text> Price : ₹{element.price}</Card.Text>
                <div className="button_div d-flex justify-content-center">
                  <Button
                    variant="primary"
                    className="col-lg-12"
                    onClick={() => send(element)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
