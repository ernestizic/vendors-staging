import styled from "styled-components";

export const DashboardContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    
    .dashboard-screen{
        /* border: 1px solid blue; */
        /* position: relative; */
        margin-left: 240px;
        max-height: 100vh;
        overflow: auto;
        padding-bottom: 89px;
        @media only screen and (max-width: 768px) { 
            margin: 0;
            padding-top: 110px;
        }

    }
`