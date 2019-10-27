import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableBody,
  MDBTableHead
} from 'mdbreact';

function PriceInfo(props) {
  return (
    <React.Fragment>
      <MDBContainer className='main-container' fluid>
        <MDBRow>
          <MDBCol xl='12' xs='12' className='contentArea-container '>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Цены
          </h2>
            <MDBRow>
              <MDBCol className='text-center'>
                <MDBTable striped responsive>
                  <MDBTableHead>
                    <tr className='text-center'>
                      <th>Вид карты</th>
                      <th>Год</th>
                      <th>6 месяцев</th>
                      <th>3 месяца</th>
                      <th>1 месяц</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr className='text-center'>
                      <td>
                        Безлимитный абонемент
                        <br />
                        (6 раз в неделю)
                      </td>
                      <td>
                        72000
                        <br />
                        244 тренировки
                      </td>
                      <td>
                        43500
                        <br />
                        144 тренировки
                      </td>
                      <td>
                        25500
                        <br />
                        72 тренировки
                      </td>
                      <td>
                        9600
                        <br />
                        24 тренировки
                      </td>
                    </tr>
                    <tr className='text-center'>
                      <td>
                        Абонемент на 1 вид единоборств
                        <br />
                        (4 раза в неделю)
                      </td>
                      <td>
                        57600
                        <br />
                        192 тренировки
                        <br />
                        (1 тр.-300р)
                      </td>
                      <td>
                        33600
                        <br />
                        96 тренировок
                        <br />
                        (1 тр.-350р)
                      </td>
                      <td>
                        19200
                        <br />
                        48 тренировок
                        <br />
                        (1 тр.-400р)
                      </td>
                      <td>
                        7200
                        <br />
                        16 тренировок
                        <br />
                        (1 тр.-450р)
                      </td>
                    </tr>
                    <tr className='text-center'>
                      <td>
                        Абонемент на 1 вид единоборств
                        <br />
                        (3 раза в неделю)
                      </td>
                      <td>
                        43200
                        <br />
                        144 тренировки
                        <br />
                        (1тр.-300р)
                      </td>
                      <td>
                        25200
                        <br />
                        72 тренировки
                        <br />
                        (1 тр.-350р)
                      </td>
                      <td>
                        14400
                        <br />
                        36 тренировок
                        <br />
                        (1 тр.-400р)
                      </td>
                      <td>
                        6000
                        <br />
                        12 тренировок
                        <br />
                        (1 тр.-500р)
                      </td>
                    </tr>
                    <tr className='text-center'>
                      <td>
                        Абонемент на 1 вид единоборств
                        <br />
                        (2 раза в неделю)
                      </td>
                      <td>
                        35000
                        <br />
                        100 тренировок
                        <br />
                        (1 тр.-350р)
                      </td>
                      <td>
                        20000
                        <br />
                        50 тренировок
                        <br />
                        (1 тр.-400р)
                      </td>
                      <td>
                        11250
                        <br />
                        25 тренировок
                        <br />
                        (1 тр.-450р)
                      </td>
                      <td>
                        4800
                        <br />
                        8 тренировок
                        <br />
                        (1 тр.-600р)
                      </td>
                    </tr>
                    <tr className='text-center'>
                      <td>
                        Абонемент на 1 вид единоборств
                        <br />
                        (1 раз в неделю)
                        <br />
                      </td>
                      <td>
                        19200
                        <br />
                        48 тренировок
                        <br />
                        (1 тр.-400р)
                      </td>
                      <td>
                        10800
                        <br />
                        24 тренировки
                        <br />
                        (1 тр.-550р)
                      </td>
                      <td>
                        6600
                        <br />
                        12 тренировок
                        <br />
                        (1 тр.-550р)
                      </td>
                      <td>
                        2500
                        <br />
                        4 тренировки
                        <br />
                        (1 тр.-625р)
                      </td>
                    </tr>
                    <tr className='text-center'>
                      <td>Разовое посещение</td>
                      <td colSpan='4'>1000</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
                <p>
                  Групповые занятия: Бокс, Тайский бокс, ММА, Кроссфит +
                  посещение сауны, парковка, бесплатное полотенце
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}

PriceInfo.propTypes = {};

export default PriceInfo;

