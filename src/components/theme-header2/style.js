import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display:flex;
  justify-content:space-between;

  height:33px;
  padding: 0 10px 4px 8px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;

  .left{
    display:flex;
    align-items:center;
    .icon{
      height: 33px;
      padding: 0 10px 0 20px;
      background-position: -225px -156px;
    }
    .title{
      font-size:20px;
      font-family:"Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right:20px;
    }
  }
 
  .right{
    display:flex;
    align-items:center;
    .icon{
      display:inline-block;
      width:12px;
      height:12px;
      margin-left:4px;
      background-position: 0 -240px;
    }
  }
` 