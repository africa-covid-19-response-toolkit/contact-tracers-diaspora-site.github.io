import React from 'react'
import MainLayout from 'components/Layout/MainLayout'
import { Container, Row, Col } from 'reactstrap'
const AboutContent = () => {
  return (
    <div>
      <section className="section bg-white">
        <Container>
          <Row className="row-grid align-items-center">
            <Col lg="12" className="text-center">
              <img
                src="https://gcn.com/articles/2020/04/30/-/media/GIG/EDIT_SHARED/Public-Safety/contacttracingapp.jpg"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="row-grid align-items-center">
            <Col className="order-lg-1" lg="12">
              <h2>Purpose</h2>
              <p className="text-black">
                A partnership of nonprofit organizations, health professionals,
                business leaders and Ethiopian-American citizens working in
                collaboration with the Ethiopian Embassy has launched an
                initiative to connect Ethiopian Diaspora members with contact
                tracing jobs across the United States.
              </p>
              <p className="text-black">
                The initiative seeks to hire, train and deploy thousands of
                Ethiopian Diaspora members to do contact tracing and thus put
                newly jobless members in the community back to work.
              </p>
              <p className="text-black">
                State and local governments across the United States are
                building workforces of contact tracers to confront the COVID-19
                health crisis. Federal and State Governments have budgeted
                billions of dollars and estimates for the number of people
                needed nationwide for contact tracing range from 100,000 to as
                high as 300,000.
              </p>
              <p className="text-black">
                Contact tracing can be done from home on a full- or part-time
                basis. The work is mostly phone-based and pays an hourly wage of
                $15 to $35. Work contracts typically range from 6 to 12 months.
              </p>
              <p className="text-black">
                The responsibilities of contact tracers include calling all
                contacts of anyone diagnosed with COVID-19, determining
                exposure, assessing symptoms, referring for testing according to
                established protocols, and providing them with instructions for
                isolation or quarantine. Contact tracers will maintain ongoing
                communication with contacts to assess symptoms, ensure
                compliance with quarantine and determine social support needs.
              </p>
              <p className="text-black">
                Successful contact tracing among immigrant communities will
                require contact tracers with multilingual and multicultural
                backgrounds as “cultural literacy” is key to developing trust
                with members in these and other hard-to-reach communities.
              </p>
              <p className="text-black">
                Health departments at the State and local levels recognize the
                barriers they face—such as language, cultural norms, and fears
                due to immigration status—while trying to improve access to
                health and human services among immigrant communities, and
                understand the value of partnering with community-based
                organizations to overcome such barriers.
              </p>
              <p className="text-black">
                The initiative will work closely with the health departments of
                State and local governments across the United States, as well as
                with the Ethiopian Embassy, to mobilize and engage the Ethiopian
                Diaspora community in battling the spread of COVID-19 while
                helping unemployed members find well-paying jobs as contact
                tracers.
              </p>
              <p className="text-black">
                Contact tracers will be required to be computer literate and
                have their own working telephone and computer/mobile electronic
                device. In addition, a high school diploma is required, while
                some college training is preferred. Applicants must be 18 years
                of age or older and be legally authorized to work in the US.
              </p>
            </Col>
          </Row>
          <Row>&nbsp;</Row>
          <Row>
            <Col lg="12">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScx58L363qukdxDFKBRvFgnQbKIfqVHIiz8e90YPDv2hCuwmA/viewform?embedded=true"
                width="100%"
                height="1100"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

const AboutPage = () => {
  return (
    <MainLayout
      title="Contact Tracer Interest Registration"
      description="A partnership of nonprofit organizations, health professionals, business leaders and Ethiopian-American citizens working in collaboration with the Ethiopian Embassy has launched an initiative to connect Ethiopian Diaspora members with contact tracing jobs across the United States."
      cardStyle={true}
    >
      <AboutContent />
    </MainLayout>
  )
}
export default AboutPage
