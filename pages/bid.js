import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import FastButton from '../components/fastButton'
import '../style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContain = styled.div`
  width: 100%;
  padding: 150px 0 50px 0;
  background: #fff;
`
const MainDescription = styled.div`
  width: 100%;
  padding: 50px 0 50px 0;
  background: #FAFAFA;
`
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 992px){
    width: 100%;
  }
`
const Title = styled.div`
  text-align: center;

  & > h1{
    font-weight: bold;
    font-size: 28px;
  }
  @media (max-width: 992px){
    & > h1{
      font-weight: bold;
      font-size: 26px;
    }
  }
`
const TitleImg = styled.img`
  width: 100%;
  @media (max-width: 992px){
    margin-top: 17px;
  }
`
const Content = styled.div`
  width: 100%;
  margin-top: 45px;
  border-bottom: ${props => props.none ? 'none' : '1px solid #E8E8E8'};
  @media (max-width: 992px){
    width: 90%;
    margin: 0 auto;
  }
`
const ListContent = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 992px){
    width: 100%;
  }
`
const ConTitle = styled.div`
  border-left: 4px solid #00B1FF;
  padding-left: 8px;
  font-size: 24px;
  color: #00B1FF;
  @media (max-width: 992px){
    font-size: 18px;
    margin-top: 10px;
  }
`
const ConText = styled.div`
  color: #5A5A5A;
  font-size: 18px;
  padding: 10px 15px;
  margin-top: 11px;
  & > p {
    margin-bottom: 0;
  }
  @media (max-width: 992px){
    font-size:12px;
  }
`
const ConList = styled.div`
  color: #5A5A5A
  font-size: 18px;
  display: flex;
`
const Dolt = styled.div`
  width: 6px;
  height: 6px;
  background: #00B1FF;
  border-radius: 50%;
  margin-top: 12px;
  margin-right: 10px;

`
const Account = styled.div`
  width: 100%;
  margin: 0 auto;
  color: #5A5A5A;
  font-size: 14px;
  @media (max-width: 992px){
    width: 90%;
    font-size: 12px;
  }
`
const Busconnection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 0;
`
const IptName = styled.div`
  width: ${props => props.long ? '10%' : '20%'};
  font-size: 18px;
  color: #5A5A5A;
  margin: 12px 0;
  @media (max-width: 1440px){
    width: ${props => props.long ? '12.5%' : '25%'};
  }
  @media (max-width: 992px){
    width: ${props => props.long ? '23%' : '23%'};
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
  }
`
const IptControl = styled.div`
  width: 70%;
  margin: 5px 0;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 992px){
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`
const Button = styled.div`
  width: 120px;
  margin: 0 auto;
  background: #00B1FF;
  font-size: 16px;
  padding: 8px;
  text-align: center;
  color: #fff;
  margin-top: 30px;
  cursor: pointer;
  border-radius: 5px;
`
const ItpBlock = styled.div`
  width: ${props => props.long ? '100%' : '50%'};
  display: flex;
  @media (max-width: 992px){
    width: ${props => props.long ? '95%' : '95%'};
    margin: 0 auto;
  }
`
const BusCheck = styled.div`
  font-size: 12px;
  margin-left: 12px;
    margin-top: 5px;
  & > a {
    color: #00B1FF;
  }
  @media (max-width: 992px){
    margin-left: 0px;
  }
`
const ExTex = styled.div`
  width: 85%;
  padding-left: 11px;
  padding-right: 9px;
  @media (max-width: 992px){
    width: 100%;
  }
`

const Bid = () => {
  return (
    <Layout>
      <Head
        title="信義全球資產"
        description="信義房屋集團人才招募培訓中，提供各種集團熱門職缺、徵才消息、薪資福利。完整新人培訓課程不用怕沒人可以問，歡迎熱忱的你加入我們，與我們一起共創最大價值。"
      />
      <Navbar />
      <NavHomeMobile />
      <MainContain>
        <Container>
          <Title>
            <h1>信義全球資產管理(股)公司</h1>
            <h1>臺北市精華地段辦公標售案</h1>
            <TitleImg src='/static/img/pic10.png' />
          </Title>
          <Content>
            <ConTitle>甲標標售調整公告 （民國107年11月1日）</ConTitle>
            <ConText>
            龍巖股份有限公司委託信義全球資產辦理「太平洋商業大樓」（甲標）公開標售調整議價案，詳如說明。<br />
            對於本次修正，如有任何疑問，請來電洽詢。<br /><br />
              聯絡人：<br />
              歐人彰 資深協理 電話(02)2729-8800 分機310
            </ConText>
          </Content>
          <Content>
            <ConTitle>標售投標文件第二次修正（民國107年10月25日）</ConTitle>
            <ConText>
              關於龍巖股份有限公司委託信義全球資產辦理「太平洋商業大樓」（甲標）、「台北金融中心大樓」（乙標）公開標售投標文件第二次修正。<br />
              投標文件悉以本修訂版為準，得標人將以修正後條文簽訂不動產買賣契約。<br />
              對於本次修正，如有任何疑問，請來電洽詢。<br /><br />
              聯絡人：<br />
              吳昱賢 副理 手機：0922-062-588 s286611@sinyi.com.tw<br />
              陳麗貞 經理 手機：0920-734-198 s285906@sinyi.com.tw
            </ConText>
          </Content>
          <Content>
            <ConTitle>標售投標文件第二次修正（民國107年10月25日）</ConTitle>
            <ConText>
              關於龍巖股份有限公司委託信義全球資產辦理「太平洋商業大樓」（甲標）、「台北金融中心大樓」（乙標）公開標售投標文件第二次修正。<br />
              投標文件悉以本修訂版為準，得標人將以修正後條文簽訂不動產買賣契約。<br />
              對於本次修正，如有任何疑問，請來電洽詢。<br /><br />
              聯絡人：<br />
              吳昱賢 副理 手機：0922-062-588 s286611@sinyi.com.tw<br />
              陳麗貞 經理 手機：0920-734-198 s285906@sinyi.com.tw
            </ConText>
          </Content>
        </Container>
        </MainContain>
        <MainDescription>
          <Container>
            <Title>
              <h1>標售公告</h1>
            </Title>
            <Account>
              壹、公告日期：民國107年8月27日。<br />
              貳、委託單位：龍巖股份有限公司。<br />
              參、受託單位：信義全球資產管理股份有限公司（以下稱信義全球資產）。<br />
              肆、標售標的：<br />
              　　甲標：臺北市忠孝東路四段285號太平洋商業大樓部份樓層及停車位16個。<br />
              　　乙標：臺北市敦化北路88號台北金融中心大樓部份樓層及停車位33個。<br />
              伍、投標方式：本次標售以通訊投標方式辦理。<br />
              陸、領標方式：<br />
              　　有意投標人得自公告日起至民國107年11月06日18時止，至信義全球資產管理股份有限公司洽詢。購買投標文件，<br />
                    每份新台幣1,200元整（含稅）。<br />
              　　信義全球資產：臺北市信義區信義路五段2號11樓（震旦國際大樓）。<br />
              柒、標售聯絡人：<br />
              　　有有關本次標售相關事宜及標單領取，請洽詢如下人員：<br />
              　　聯絡電話：(02)2729-8800 傳真電話：(02)2725-2608<br />
              　　吳昱賢 副理 手機：0922-062-588 s286611@sinyi.com.tw<br />
              　　陳麗貞 經理 手機：0920-734-198 s285906@sinyi.com.tw<br />
              　　歐人彰 資深協理 howard.ou@sinyi.com.tw<br />
              捌、開標日期及處所：<br />
              　　本次標售於民國107年11月07日下午2時整於信義房屋總公司（臺北市信義區信義路五段100號）開標。<br />
              玖、標售底價及保證金：<br />
              　　甲標（太平洋商業大樓部份樓層及停車位16個）：新臺幣14.2億元整（含稅）。<br />
              　　乙標（台北金融中心大樓部份樓層及停車位33個）：新臺幣18.2億元整（含稅）。<br />

            </Account>
          </Container>
        </MainDescription>
        <MainContain>
          <Container>
            <Title>
              <h1>甲標：太平洋商業大樓部份樓層及停車位16個</h1>
              <TitleImg src='/static/img/pic11.png' />
            </Title>
            <Content none>
              <ConTitle>甲標標售調整公告 （民國107年11月1日）</ConTitle>
            </Content>
            <TitleImg src='/static/img/pic12.png' />
          </Container>
        </MainContain>
        <MainDescription>
          <Container>
            <Title>
              <h1>太平洋商業大樓標的說明</h1>
            </Title>
            <Account>
              <Content>
                <ListContent>
                  <ConTitle>不動產說明</ConTitle>
                  <ConText>
                  <ConList><Dolt />建物面積：約1490坪(不含車位)</ConList>
                  <ConList><Dolt />車位數量：坡道平面車位16個</ConList>
                  <ConList><Dolt />建物結構：鋼筋混凝土造(14F/B2F)</ConList>
                  <ConList><Dolt />建築完工：民國71年</ConList>
                  <ConList><Dolt />使用分區：商四特(原屬商二、住四)</ConList>
                  <ConList><Dolt />建築用途：辦公室</ConList></ConText>
                </ListContent>
              </Content>
              <Content>
              <ListContent>
                  <ConTitle>投資亮點</ConTitle>
                  <ConText>
                  <ConList><Dolt />東區SOGO商圈，核心蛋黃地段</ConList>
                  <ConList><Dolt />捷運忠孝敦化站，交通便捷性高</ConList>
                  <ConList><Dolt />連續三完整樓層中堅企業總部</ConList>
                  <ConList><Dolt />13%低公設，方整平面，使用坪效高</ConList>
                  <ConList><Dolt />商業區高容積與高土地持份面積，未來更新再開發潛在利益優勢</ConList></ConText>
                </ListContent>
              </Content>
            </Account>
          </Container>
        </MainDescription>
        <MainContain>
          <Container>
            <Title>
              <h1>聯絡我們</h1>
            </Title>
            <ListContent>
              <Busconnection>
                <ItpBlock>
                  <IptName>您的姓名</IptName>
                  <IptControl>
                    <input className='form-control' type='text' placeholder='姓名(必填)' />
                  </IptControl>
                </ItpBlock>
                <ItpBlock>
                  <IptName>聯絡電話</IptName>
                  <IptControl>
                    <input className='form-control' type='text' placeholder='聯絡電話(必填)' />
                  </IptControl>
                </ItpBlock>
                <ItpBlock>
                  <IptName>公司名稱</IptName>
                  <IptControl>
                    <input className='form-control' type='text' placeholder='公司名稱(必填)' />
                  </IptControl>
                </ItpBlock>
                <ItpBlock>
                  <IptName>電子郵件</IptName>
                  <IptControl>
                    <input className='form-control' type='text' placeholder='電子郵件(必填)' />
                  </IptControl>
                </ItpBlock>
                <ItpBlock long>
                  <IptName long>聯繫內容</IptName>
                  <ExTex className=''>
                    <textarea
                      className="form-control textPd"
                      id="myBiog"
                      rows="2"
                      placeholder='聯繫內容(必填)'
                    />
                  </ExTex>
                </ItpBlock>
                <ItpBlock long>
                  <IptName long></IptName>
                  <BusCheck>
                    <input type="checkbox" /> 送出資料前，請點選同意本站 <a href=''>隱私權政策</a> 及 <a href=''>服務條款</a>
                  </BusCheck>
                </ItpBlock>
                <Button>送出</Button>
              </Busconnection>
            </ListContent>
          </Container>
        </MainContain>
      <FastButton />
    </Layout>
  )
}

export default Bid