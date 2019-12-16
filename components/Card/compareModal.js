import React from 'react'
import styled from 'styled-components'
import { Table } from 'react-bootstrap'

const ColseModal = styled.div`
  width: 20px;
  right: 20px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 10px;
  & > img{
    width: 100%;
  }
`
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 70px;
  @media (max-width: 768px){
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`
const Preset = styled.div`
  width: 80%;
  margin: 0 auto;
  & > img{
    width: 100%;
  }
`
const ListNumber = styled.div`
  font-size: 19px;
  padding: 0 20px;
  font-weight: 500;
  @media (max-width: 768px){
    display: none;
  }
`
const ListTitle = styled.div`
  font-size: 19px;
  padding: 0 20px;
  margin-bottom: 10px;
  @media (max-width: 768px){
    display: none;
  }
`
const Map = styled.div`
  width: 100%;
  margin: 0 auto;
  & > img{
    width: 100%;
  }
`
const CloseButton = styled.div`
  width: 110px;
  margin: 0 auto;
  background: #E10000;
  color: #fff;
  text-align: center;
  display: flex;
  font-size: 17px;
  padding: 10px 25px;
  border-radius: 10px;
  & > img{
    width: 14px;
    margin-top: 5px;
    margin-right: 5px;
  }
`


const SuccessModal = (props) => {
  // console.log(props.show)
  return (
    <div className='yamatake'
      style={{
        display: props.show ? 'block' : 'none'
      }}
    >
      <ColseModal onClick={props.close}>
        <img src='/static/img/closeModal.png' />
      </ColseModal>
      <Container>
        <Map>
          <img src='/static/img/compare_map.png' />
        </Map>
        <Table className='compareForm' striped bordered>
          <thead>
            <tr>
              <th></th>
              <th>
                <ListNumber>32092Y</ListNumber>
                <ListTitle>信義獨棟透天別墅</ListTitle>
                <Preset>
                  <img src='/static/img/compare_none.png' />
                </Preset>
              </th>
              <th>
                <Preset>
                  <img src='/static/img/compare_none.png' />
                </Preset>
              </th>
              <th>
                <Preset>
                  <img src='/static/img/compare_none.png' />
                </Preset>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>編號</td>
              <td>32092Y</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>名稱</td>
              <td>信義獨棟別墅</td>
              <td></td>
              <td></td>
            </tr> */}
            <tr>
              <td>地址</td>
              <td>台北市信義區信義路五段</td>
              <td>台南市東區東寧路</td>
              <td></td>
            </tr>
            <tr>
              <td>用途</td>
              <td>廠房</td>
              <td>辦公</td>
              <td></td>
            </tr>
            <tr>
              <td>類型</td>
              <td>辦公/廠房</td>
              <td>土地/店面</td>
              <td></td>
            </tr>
            <tr>
              <td>價格</td>
              <td>1億9,800萬元</td>
              <td>3億5,800萬元</td>
              <td></td>
            </tr>
            <tr>
              <td>建築面積</td>
              <td>25.1坪</td>
              <td>51.1坪</td>
              <td></td>
            </tr>
            <tr>
              <td>土地面積</td>
              <td>15.1坪</td>
              <td>32.1坪</td>
              <td></td>
            </tr>
            <tr>
              <td>樓層</td>
              <td>7F/12F</td>
              <td>7F/12F</td>
              <td></td>
            </tr>
            <tr>
              <td>建築結構</td>
              <td>鋼筋混凝土</td>
              <td>鋼筋混凝土</td>
              <td></td>
            </tr>
            <tr>
              <td>車位</td>
              <td>坡道平面</td>
              <td>坡道平面</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td><CloseButton><img src='/static/img/trash.png' />刪除</CloseButton></td>
              <td><CloseButton><img src='/static/img/trash.png' />刪除</CloseButton></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default SuccessModal