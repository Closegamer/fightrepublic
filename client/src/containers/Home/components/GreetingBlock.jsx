import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn
} from "mdbreact";
import clubPic1 from "../../../img/club/club1.jpeg";
import clubPic3 from "../../../img/club/club3.jpeg";
import clubPic4 from "../../../img/club/club4.jpeg";
import "../styles.css";

const BlogPage = () => {
  return (
    <div className="mt35">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        заголовок!
      </h2>
      <MDBRow>
        <MDBCol lg="5">
          <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img className="img-fluid" src={clubPic1} alt="" />
            <a href="/masters">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
        </MDBCol>
        <MDBCol lg="7">
          <h3 className="font-weight-bold mb-3 p-0">
            <strong>ячейка 1 трам-парам</strong>
          </h3>
          <p>парам пам пам</p>
          <MDBBtn
            href="/masters"
            color="success"
            size="md"
            className="waves-light adminBtn"
          >
            Кнопка 1
          </MDBBtn>
          <MDBBtn
            href="/schedule-show"
            color="success"
            size="md"
            className="waves-light adminBtn"
          >
            Кнопка 2
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <hr className="my-5" />
      <MDBRow>
        <MDBCol lg="5">
          <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img className="img-fluid" src={clubPic3} alt="" />
            <a href="/masters">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
        </MDBCol>
        <MDBCol lg="7">
          <h3 className="font-weight-bold mb-3 p-0">
            <strong>ячейка 2 </strong>
          </h3>
          <p>пум пурум</p>
          <MDBBtn
            href="/info"
            color="success"
            size="md"
            className="waves-light adminBtn"
          >
            кнопка 1
          </MDBBtn>
          <MDBBtn
            href="/schedule-show"
            color="success"
            size="md"
            className="waves-light adminBtn"
          >
            Кнопка 2
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <hr className="my-5" />
      <MDBRow>
        <MDBCol lg="5">
          <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img className="img-fluid" src={clubPic4} alt="" />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
        </MDBCol>
        <MDBCol lg="7">
          <h3 className="font-weight-bold mb-3 p-0">
            <strong>ячейка 3</strong>
          </h3>
          <p>пим пирим</p>
          <MDBBtn
            href="/contacts"
            color="indigo"
            size="md"
            className="waves-light adminBtn"
          >
            кнопка 1
          </MDBBtn>
          <MDBBtn
            href="/schedule-show"
            color="success"
            size="md"
            className="waves-light adminBtn"
          >
            Кнопка 2
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default BlogPage;
