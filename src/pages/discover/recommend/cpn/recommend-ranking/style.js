import styled from 'styled-components'
import bgImg from '@/assets/img/recommend-top-bg.png'

export const RankingWrapper = styled.div`
  .top{
    margin:30px 0;
    display:flex;
    background-image:url(${bgImg});
    height:472px;
  }
`

export const TopListWrapper = styled.div`
  width:233px;
  height:472px;
  .header{
    height:100px;
    display:flex;
    margin:20px 0 0 20px;

    .image{
      width:80px;
      height:80px;
      position:relative;

      img{
        width:80px;
        height:80px;
      }
    }
    .info{
      margin:5px 0 0 10px;
      a{
        font-size:14px;
        color:#333;
        font-weight:700;
        display:block
      }
      .btn{
        display:inline-block;
        text-indent:-9999px;
        width:22px;
        height:22px;
        margin:8px 10px 0 0;
        cursor:pointer; 
      }
      .paly{
        background-position: -267px -205px;
      }
      .favor{
        background-position: -300px -205px;
      }
    }
  }
  .list{

    .list-item{
      position:relative;
      display:flex;
      justify-content:space-between;
      align-items:center;

      :nth-child(-n+3) .rank{
        color:#87CEFA;
      }

      .rank{
        width:35px;
        text-align:center;
        margin-left:10px;
        font-size:16px;
      }
      .info{
        color:#000;
        width:170px;
        height:32px;
        line-height:32px;
        display:flex;
        justify-content:space-between;
        .name{
          flex:1;
        }
        .operate{
          display:flex;
          align-items:center;
          display:none;
          margin-top:5px;
          width:82px;
          .btn{
            width:17px;
            height:17px;
            margin-left:8px;
            cursor:pointer;
          }
          .play{
            background-position: -267px -268px;
          }
          .addto {
            position: relative;
            top:2px;
            background-position: 0 -700px;
          }
          .favor {
            background-position: -297px -268px;
          }
        }
      }
      &:hover{
        .operate{
          display:block;
        }
      }
    }
  }
  .footer{
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    justify-content: flex-end;
    a{
      color:#000;
    }
  }
`