import styled from "styled-components";

export const TabBarWrapper = styled.div`
    width:100%;
    height:1rem;
    position:fixed;
    left:0;
    bottom:0;
    background:#fff;
    border-top:1px solid #ccc;
    ul{
        width:100%;
        height:100%;
        display:flex;
        justify-content:space-between;
    }
    li{
        width:100%;
        height:100%;
    }
    a{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
         align-items:center;
         i{
             font-size:.45rem;
             color:#2c3038;
         }
         span{
             font-size:.3rem;
             color:#2c3038;
         }
    }
    .active{
        i{
             font-size:.45rem;
             color:#c33;
         }
         span{
             font-size:.3rem;
             color:#c33;
         }
    }

`


