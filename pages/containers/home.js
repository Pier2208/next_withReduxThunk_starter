import { Layout } from "../../components/Layout";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 20rem) [col-end])
    [center-end]
    minmax(5rem, 1fr) [full-end];
  grid-template-rows: 100vh;
  background: linear-gradient(180deg, #0055ff 0%, rgb(0, 153, 255) 100%);
`;

export const Home = () => (
  <Layout>
    <Grid>
      <h1>HOME</h1>
    </Grid>
  </Layout>
);
