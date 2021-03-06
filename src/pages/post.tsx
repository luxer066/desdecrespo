import { Router } from "@reach/router";
import React from "react";
import Layout from "../components/layout/Layout";
import IndividualPost from "../components/post/IndividualPost";

const Post = () => (
  
  <Layout location={window.location} title="Test">    
    <Router>
      <IndividualPost path="/post/:slug/:id" />
    </Router>
  </Layout>
)
export default Post