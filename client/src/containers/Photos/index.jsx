import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Lightbox from 'react-image-lightbox';
import './Lightbox.css';
import club1 from '../../img/club/club1.jpeg';
import club3 from '../../img/club/club3.jpeg';
import club4 from '../../img/club/club4.jpeg';
import club5 from '../../img/club/club5.jpeg';
import club6 from '../../img/club/club6.jpeg';
import club7 from '../../img/club/club7.jpeg';
import club8 from '../../img/club/club8.jpeg';
import club9 from '../../img/club/club9.jpeg';
import club10 from '../../img/club/club10.jpeg';

class Photos extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [club1, club3, club4, club8, club9, club5, club6, club7, club10],
    colWidth: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
  };

  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;

    return images.map((imageSrc, index) => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md={this.state.colWidth[index]} key={photoIndex}>
          <figure>
            <img
              src={imageSrc}
              alt='Gallery'
              className='img-fluid z-depth-1'
              onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
            />
          </figure>
        </MDBCol>
      );
    });
  };

  render() {
    const { photoIndex, isOpen, images } = this.state;
    return (
      <MDBContainer className='mt-5 p-3'>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Галерея
        </h2>
        <div className='mdb-lightbox p-3'>
          <MDBRow>{this.renderImages()}</MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + '/' + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default Photos;
