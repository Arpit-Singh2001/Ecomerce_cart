import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { ADD, DLT, REMOVE } from "../redux/actions/action";

const CardsDetails = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const send = (e) => {
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  //remove one

  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  useEffect(() => {
    const compare = () => {
      let comparedata = getdata.filter((e) => {
        return e.id === Number(id);
      });

      setData(comparedata);
    };
    compare();
  }, [getdata, id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Checkout Details Page </h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((ele, id) => {
              return (
                <>
                  <div className="items_img">
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
                          <p>
                            <strong>Total</strong> : ₹ {ele.price * ele.qnty}
                          </p>

                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={
                                ele.qnty <= 1
                                  ? () => dlt(ele.id)
                                  : () => remove(ele)
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(ele)}
                            >
                              +
                            </span>
                          </div>
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
                          <p>
                            <strong>Remove</strong> :
                            <i
                              className="fas fa-trash mx-2"
                              style={{
                                color: "red ",
                                fontSize: "20",
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(ele.id)}
                            ></i>
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

export default CardsDetails;
