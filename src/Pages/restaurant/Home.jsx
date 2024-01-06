import { useState } from "react";
import style from "./App.module.css";
import Search from './components/Search'
import { Container } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  const handleSearch = () => {
    <Search/>
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url('/image/restaurantImage/901414.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="container"
      >
        <Container>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              justifyContent: "space-between",
              paddingTop: "18px",
            }}
            className="Nav"
          >
            <img style={{ width: "5%" }} src="/image/restaurantImage/burgerLogo.jpg" alt="" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "25%",
              }}
            >
              <p style={{ fontSize: "100%" }}>Home</p>
              <p style={{ fontSize: "100%" }}>Menu</p>
              <p style={{ fontSize: "100%" }}>About</p>
              <p style={{ fontSize: "100%" }}>Shop</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "12%",
              }}
            >
              <img onClick={handleSearch} src="/image/search.png" style={{ width: "16%" }} alt="search" />
              <img src="/image/user.png" style={{ width: "16%" }} alt="user" />
              <img src="/image/cart.png" style={{ width: "16%" }} alt="cart" />
            </div>
          </div>
          <div style={{ color: "white", fontFamily: "math", width: "50%" }}>
            <div>
              <p
                style={{
                  fontSize: "435%",
                  fontWeight: "bold",
                  lineHeight: "1em",
                  marginBottom: "0.5em",
                }}
              >
                THE ULTIMATE BURGER HAVEN
              </p>
            </div>
            <p style={{ marginBottom: "1px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              provident dicta esse perspiciatis obcaecati iste dolore accusamus
              dolorem a corrupti. Culpa quidem ut accusamus optio a ullam
              ratione eaque odio!
            </p>
          </div>
          <div>
            <button
              className={style.Btn}
              style={{ margin: "15px 15px 4px 0px" }}
            >
              Order Now
            </button>
            <button className={style.Btn}>Mean</button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
