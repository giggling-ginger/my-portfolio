import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Mia's Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi! I am Mia. I am a community-taught full stack developer with
          experience in React, Next.js, Node.js, Solidity, Hardhat, GraphQL. I
          love what I do but I am seeking more professional and personal
          satisfaction. I can't wait to scale up my skillset and contribute on
          the job. I am a self-motivated and self-managing fast learner and I
          would thrive in an asynchronous environment.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
