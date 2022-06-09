import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/common.scss";
import "./Login.scss";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // const loginId = useRef();
  // const loginPw = useRef();
  const loginBtn = useRef();
  // const changeColor = () => {
  //   const idInput = document.querySelector(".loginId");
  //   const pwInput = document.querySelector(".loginPw");
  //   const loginBtn = document.querySelector(".loginBtn");
  //   id.includes("@") && pw.length > 4
  //     ? (loginBtn.current.style.backgroundColor = "#0989f1")
  //     : (loginBtn.current.style.backgroundColor = "#bddbf9");
  // };
  useEffect(() => {
    id.includes("@") && pw.length > 4
      ? (loginBtn.current.style.backgroundColor = "#0989f1")
      : (loginBtn.current.style.backgroundColor = "#bddbf9");
  }, [id, pw]);

  // Mission 2. 로그인 버튼 활성화기능
  // 로그인 요건 충족시 main페이지로 넘어가는 기능 구현
  // 추후 삼항연산자로 리팩토링 필요
  // const toMainPage = (e) => {
  //   const idInput = document.querySelector(".login_id");
  //   const pwInput = document.querySelector(".login_pw");
  //   const loginBtn = document.querySelector(".login_btn");
  //   if (idInput.value !== pwInput.value) {
  //     // loginBtn.preventDefault();
  //     loginBtn.disabled = true;
  //   } else if (
  //     idInput.value.length > 0 &&
  //     pwInput.value.length > 0 &&
  //     idInput.value === pwInput.value
  //   ) {
  //     window.location.href = "/main";
  //   }
  // };

  const navigate = useNavigate();
  const goToMain = (e) => {
    // const idInput = document.querySelector(".login_id");
    // const pwInput = document.querySelector(".login_pw");
    // const loginBtn = document.querySelector(".login_btn");
    e.preventDefault();
    if (id !== pw) return;
    if (id.length > 0 && pw.length > 0 && id === pw) {
      // console.log("enter");
      navigate("/Main");
    }
  };

  return (
    <div className="login">
      <div className="wrapper">
        <header className="title">Westagram</header>
        <form className="infoWrapper" onSubmit={goToMain}>
          <input
            className="loginId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            // onInput={changeColor}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <input
            className="loginPw"
            type="password"
            placeholder="비밀번호"
            // onInput={changeColor}
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
          <div className="btnWrapper">
            <button className="loginBtn" ref={loginBtn}>
              로그인
            </button>
          </div>
        </form>
        <div className="pwSearch">
          <Link to={"/"}>비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
