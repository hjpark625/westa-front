import React, { useState, useRef, useEffect } from "react";
import "./Main.scss";
import "./Main_comment.scss";
import "../../styles/common.scss";
import profile from "../../img/618A000834.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  // const like = () => {
  //   let heart = document.getElementsByClassName("fa-heart")[0];

  //   heart.addEventListener("click", () => {
  //     if (heart.className === "fa-regular fa-heart") {
  //       heart.className = "fa-solid fa-heart";
  //       heart.style.color = "red";
  //     } else {
  //       heart.className = "fa-regular fa-heart";
  //       heart.style.color = "black";
  //     }
  //   });
  // };
  // like();

  // // 댓글 기능 구현
  // let commentInput = document.getElementsByClassName("main_comment_box")[0];
  // let submitBtn = document.getElementsByClassName("main_comment_btn")[0];
  // // 댓글 기능 구현(함수)
  // const submit = () => {
  //   const commentBox = document.getElementsByClassName("exp_contents")[0];
  //   const comments = document.createElement("div");
  //   const username = document.createElement("span");
  //   const mainText = document.createElement("p");
  //   const mainIcon = document.createElement("i");

  //   comments.classList.add("comment_box");
  //   username.classList.add("username");
  //   mainText.classList.add("comment");
  //   mainIcon.className = "fa-regular fa-heart like";

  //   username.innerHTML = " hjpark625 ";
  //   mainText.innerText = commentInput.value;

  //   comments.appendChild(username);
  //   comments.appendChild(mainText);
  //   comments.appendChild(mainIcon);

  //   commentBox.appendChild(comments);

  //   // Mission 6. 댓글 좋아요 기능 구현(삭제기능 미구현)
  //   mainIcon.addEventListener("click", () => {
  //     if (mainIcon.className === "fa-regular fa-heart like") {
  //       mainIcon.className = "fa-solid fa-heart like";
  //       mainIcon.style.color = "red";
  //     } else {
  //       mainIcon.className = "fa-regular fa-heart like";
  //       mainIcon.style.color = "black";
  //     }
  //   });
  // };

  // submitBtn.addEventListener("click", (e) => {
  //   // 댓글 내용이 있을 때만 활성화
  //   if (commentInput.value.length === 0) {
  //     submitBtn.disabled = true;
  //   } else {
  //     submit();
  //   }
  //   commentInput.value = "";
  // });

  // commentInput.addEventListener("keydown", (e) => {
  //   // 댓글 내용이 있을 때만 활성화
  //   if (e.code === "Enter") {
  //     if (commentInput.value.length === 0) {
  //       submitBtn.disabled = true;
  //     } else {
  //       submit();
  //     }
  //     commentInput.value = "";
  //   }
  // });
  const [comment, setComment] = useState("");
  // 게시글 버튼 글자 색상 / 활성화 및 비활성화 조건 구현
  const mainCommentBox = useRef();
  const mainCommentBtn = useRef();
  // function buttonColor(e) {
  //   e.preventDefault();
  //   // let commentBx = document.querySelector(".mainCommentBox");
  //   // let commentBtn = document.querySelector(".mainCommentBtn");
  //   if (comment.length === 0) {
  //     mainCommentBtn.current.style.color = "#bddbf9";
  //   } else {
  //     mainCommentBtn.current.style.color = "#0989f1";
  //   }
  // }
  useEffect(() => {
    if (comment.length === 0) {
      mainCommentBtn.current.style.color = "#bddbf9";
    } else {
      mainCommentBtn.current.style.color = "#0989f1";
    }
  }, [comment]);

  return (
    <div className="main">
      <nav className="navbar">
        <div className="westa">
          <span className="westaLogo">
            <i className="fa-brands fa-instagram"></i>
          </span>
          <span className="westaTitle">Westagram</span>
        </div>
        <label className="searchBar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="검색" />
        </label>
        <div className="navbarIcons">
          <ul>
            <li>
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="compass"
              />
            </li>
            <li>
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="heart"
              />
            </li>
            <li>
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="my info"
              />
            </li>
          </ul>
        </div>
      </nav>

      <main className="mainPage">
        <section className="feeds">
          <article className="feedsContents">
            <header className="account">
              <div className="miniPhoto">
                <img src={profile} alt="profile" />
              </div>
              <span className="name">hjpark625</span>
              <span className="moreBtn">
                <i className="fa-solid fa-ellipsis"></i>
              </span>
            </header>
            <div className="feedsImg">
              <img
                src="https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="iconsBundle">
              <div className="iconsWrapper">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
              </div>
              <i className="fa-regular fa-bookmark"></i>
            </div>
            <footer className="explanation">
              <div className="whoLikes">
                <img src={profile} alt="profile" />
                <span className="likesText">
                  hjpark625님 외 10명이 좋아합니다.
                </span>
              </div>
              <div className="expContents">
                <div className="comment">
                  <b>canon_mj</b> 산이다 산...{" "}
                  <span className="moreContents">
                    <Link to={"#"}>더 보기</Link>
                  </span>
                </div>
                <div className="comment">
                  <b>neceosecius</b> 거봐 산이 멋지잖아! 🙆‍♂️
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="postTime">42분 전</div>
              </div>
            </footer>
            <form className="commentBox">
              <input
                className="mainCommentBox"
                type="text"
                placeholder="댓글 달기..."
                ref={mainCommentBox}
                // onInput={buttonColor}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
              <button ref={mainCommentBtn} className="mainCommentBtn">
                게시
              </button>
            </form>
          </article>
        </section>
        <section className="mainRight">
          <div className="rightProfile">
            <div className="rightImg">
              <img
                src="https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="rightName">
              <div className="nameId">Lego_bootcamp</div>
              <div className="nameInfo">Lego | 레고</div>
            </div>
          </div>
          <div className="rightStories">
            <div className="storiesTab">
              <div className="tabName">스토리</div>
              <div className="tabMore">
                <Link to={"#"}>모두 보기</Link>
              </div>
            </div>
            <div className="otherStories">
              <div className="storiesFirst">
                <div className="firstImg">
                  <img
                    src="https://images.unsplash.com/photo-1606878323177-265211499dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                    alt=""
                  />
                </div>
                <div className="firstName">
                  <div className="nameId">Alpha_bootcamp</div>
                  <div className="nameInfo">16분 전</div>
                </div>
              </div>
              <div className="storiesSecond">
                <div className="secondImg">
                  <img
                    src="https://images.unsplash.com/photo-1642101566158-5c2d5dfed57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80"
                    alt=""
                  />
                </div>
                <div className="secondName">
                  <div className="nameId">Bravo_bootcamp</div>
                  <div className="nameInfo">3시간 전</div>
                </div>
              </div>
              <div className="storiesThird">
                <div className="thirdImg">
                  <img
                    src="https://images.unsplash.com/photo-1524009901480-a6fa1c0c8ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />
                </div>
                <div className="thirdName">
                  <div className="nameId">Charlie_bootcamp</div>
                  <div className="nameInfo">20시간 전</div>
                </div>
              </div>
              <div className="storiesThird">
                <div className="thirdImg">
                  <img
                    src="https://images.unsplash.com/photo-1538603644737-89b694ec9214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
                    alt=""
                  />
                </div>
                <div className="thirdName">
                  <div className="nameId">Delta_bootcamp</div>
                  <div className="nameInfo">1시간 전</div>
                </div>
              </div>
              <div className="storiesThird">
                <div className="thirdImg">
                  <img
                    src="https://images.unsplash.com/photo-1501605623075-d5715e4637ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />
                </div>
                <div className="thirdName">
                  <div className="nameId">Echo_bootcamp</div>
                  <div className="nameInfo">12시간 전</div>
                </div>
              </div>
              <div className="storiesThird">
                <div className="thirdImg">
                  <img
                    src="https://images.unsplash.com/photo-1462953491269-9aff00919695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                </div>
                <div className="thirdName">
                  <div className="nameId">Foxtrot_bootcamp</div>
                  <div className="nameInfo">15분 전</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightRecommends">
            <div className="recommendsTab">
              <div className="tabName">회원님을 위한 추천</div>
              <div className="tabMore">
                <Link to={"#"}>모두 보기</Link>
              </div>
            </div>
            <div className="recommendsContents">
              <div className="recommendsFirst">
                <div className="wrapper">
                  <div className="first">
                    <img
                      src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />
                  </div>
                  <div className="firstName">
                    <div className="nameId">Golf_bootcamp</div>
                    <div className="nameInfo">Alpha님 외 2명이 ...</div>
                  </div>
                </div>
                <div className="followBtn">
                  <button>팔로우</button>
                </div>
              </div>
              <div className="recommendsSecond">
                <div className="wrapper">
                  <div className="second">
                    <img
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />
                  </div>
                  <div className="secondName">
                    <div className="nameId">Hotel_bootcamp</div>
                    <div className="nameInfo">Bravo님 외 10명이 ...</div>
                  </div>
                </div>
                <div className="followBtn">
                  <button>팔로우</button>
                </div>
              </div>
              <div className="recommendsThird">
                <div className="wrapper">
                  <div className="third">
                    <img
                      src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                      alt=""
                    />
                  </div>
                  <div className="thirdName">
                    <div className="nameId">India_bootcamp</div>
                    <div className="nameInfo">Charli님 외 12명이 ...</div>
                  </div>
                </div>
                <div className="followBtn">
                  <button>팔로우</button>
                </div>
              </div>
              <div className="recommendsThird">
                <div className="wrapper">
                  <div className="third">
                    <img
                      src="https://images.unsplash.com/photo-1620476963747-3a235f6fef0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                      alt=""
                    />
                  </div>
                  <div className="thirdName">
                    <div className="nameId">Juliet_bootcamp</div>
                    <div className="nameInfo">Delta님 외 4명이 ...</div>
                  </div>
                </div>
                <div className="followBtn">
                  <button>팔로우</button>
                </div>
              </div>
              <div className="recommendsThird">
                <div className="wrapper">
                  <div className="third">
                    <img
                      src="https://images.unsplash.com/photo-1627225316329-70af8308db14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                      alt=""
                    />
                  </div>
                  <div className="thirdName">
                    <div className="nameId">Kilo_bootcamp</div>
                    <div className="nameInfo">Echo님 외 5명이 ...</div>
                  </div>
                </div>
                <div className="followBtn">
                  <button>팔로우</button>
                </div>
              </div>
              <div className="recommendsThird">
                <div className="wrapper">
                  <div className="third">
                    <img
                      src="https://images.unsplash.com/photo-1577587230708-187fdbef4d91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                      alt=""
                    />
                  </div>
                  <div className="thirdName">
                    <div className="nameId">Lima_bootcamp</div>
                    <div className="nameInfo">Foxtrot님 외 20명이 ...</div>
                  </div>
                </div>
                <div className="followBtn">
                  <button>팔로우</button>
                </div>
              </div>
            </div>
          </div>
          <div className="info">
            <Link to={"#"}>Instagram 정보 ·</Link>
            <Link to={"#"}>지원 ·</Link>
            <Link to={"#"}>홍보센터 ·</Link>
            <Link to={"#"}>API ·</Link>
            <Link to={"#"}>채용 정보 ·</Link>
            <Link to={"#"}>개인정보처리방침 ·</Link>
            <Link to={"#"}>약관 ·</Link>
            <Link to={"#"}>디렉터리 ·</Link>
            <Link to={"#"}>프로필 ·</Link>
            <Link to={"#"}>해시태그 ·</Link>
            <Link to={"#"}>언어</Link>
            <p>
              <i className="fa-regular fa-copyright"></i>&nbsp;2019 INSTAGRAM
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
