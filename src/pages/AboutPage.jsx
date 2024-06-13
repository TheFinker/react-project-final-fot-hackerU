import { Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Typography>
        Hello this is Gal Fink and walcome to my site!! <br /> This site is a
        site made for my react project finale for HackerU university. <br />
        in this site you can be ether a business or regular user business user
        business users can make business cards and regular users can see them
        and add them to favorites . <br />
        this is my secand project i am a programmer learning in HackerU
        university if you need any thing you can conract me at: <br />
        Emaill: finkgal2508@gmail.com <br />
        Phone:0525677120 <br />
        address: Sarah A'aronsohn St 39 Ramat gan <br />
      </Typography>
    </div>
  );
}
