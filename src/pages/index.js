import * as React from "react"
import Herosection from "../components/HeroSection/herosection"
import Layout from "../components/layout"
import Contact from "./contact"
import Explore from "./explore"
import Journal from "./journal"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8"/>
      <title>TRIVO</title>
    </Helmet>
    <Layout>
      <Herosection />
      <Explore />
      <Journal />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
