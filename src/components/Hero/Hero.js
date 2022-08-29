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
          Hi! I am Mia. I am looking for a web3 junior developer job. I'm really
          looking forward to build the Ownership Economy with the community.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
