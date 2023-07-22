import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import Cardsdata from "./CardsData";

const Details = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  // const compare = () => {
  //   let comparedata = Cardsdata.filter((e) => {
  //     return e.id === Number(id);
  //   });

  //   setData(comparedata);
  // };

  useEffect(() => {
    const compare = () => {
      let comparedata = Cardsdata.filter((e) => {
        return e.id === Number(id);
      });

      setData(comparedata);
    };

    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Details Page </h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img  ">
                    <img
                      className="img-shadow p-3"
                      src={ele.imgdata}
                      alt="img"
                    />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong> : {ele.rname}
                          </p>
                          <p>
                            <strong>Price </strong> : ₹{ele.price}
                          </p>
                          <p>
                            <strong>Dishes </strong> : {ele.address}
                          </p>
                        </td>

                        <td>
                          <p>
                            <strong>Rating</strong> :
                            <span
                              className="mx-2"
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating}★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review</strong> : {ele.somedata}
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Details;
