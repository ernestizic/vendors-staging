import styled from "styled-components";

export const DashboardContainer = styled.div`
    width: 100vw;
    
    .dashboard-screen{
        margin-left: 240px;
        padding-bottom: 54px;
        @media only screen and (max-width: 768px) { 
            margin: 0;
            padding-top: 110px;
        }

    }
`