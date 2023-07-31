import React from 'react'
import { Container, Heading, Texts, Wrapper ,StyledLi} from './style'

export default function Privacy() {
  return (
    <Container>
      <Wrapper>
          <Container display="block">
            <h2>Privacy and Policy</h2>
            <Heading>Information we collect</Heading>
            <Texts>
                As you visit this website you may have the option to provide your information such as
                email,names, phone and address, which will use for your services. We did not use your information
                for any reason apart from that.
                We respect your privacy regarding any information we collect from you
                in our website, because your privacy is important to us. we only collect your information for the following purpose:
            </Texts>
            <StyledLi>
               To give you full access of our website and get our services at ease
            </StyledLi>
            <StyledLi>
                To communicate with you whenever necessary
            </StyledLi>
            <StyledLi>
               For record and administrative reason
            </StyledLi>
          </Container>
          <Container display="block">
            <Heading>How We Use Information</Heading>
            <Texts>
               We use the information we collect to provide the services and communicate 
               with you. We do not share personal information at all except for the following purposes:
               <StyledLi>
                  When you have consented or directed us to share the information.
               </StyledLi>
               <StyledLi>
                  With service providers or affiliate companies who perform services on our behalf.
               </StyledLi>
               <StyledLi>
                    In order to satisfy any requirement under the law or to protect our rights or prevent any concerns relating to fraud or security.
               </StyledLi>
               <StyledLi>
                   In the event of a merger or sale of all or part of our business whereby personal information may be transferred as an asset of the business.
                   We may share with third parties aggregate information or information that does not personally identify individuals.
               </StyledLi>
            </Texts>
          </Container>
          <Container display="block">
            <Heading>Security</Heading>
            <Texts>
                 Personal information is processed and stored in our databases and 
                 we have taken reasonable steps to secure and protect the information 
                 under our control, including establishing processes to prevent unauthorized
                 access or disclosure of this information. 
                 However, we make every effort to ensure the security of your information, 
                 we are unable to guarantee the protection of the information from misuse, 
                 accidental disclosure or unauthorised acts by others. 
                 Information provided by you may be stored or processed away from Nigeria.
            </Texts>
            <Texts>
               At our discretion, we may change our privacy policy to reflect current
               acceptable practices. 
               We will take reasonable steps to let users know about changes via our website. 
               Your continued use of this site after any changes to this policy will be 
               regarded as acceptance of our practices around privacy and personal information.
            </Texts>
          </Container>
      </Wrapper>
    </Container>
  )
}
