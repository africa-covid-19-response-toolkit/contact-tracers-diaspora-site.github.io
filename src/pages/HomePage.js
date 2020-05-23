import React from 'react'
import MainLayout from 'components/Layout/MainLayout'
import {
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap'
const AboutContent = () => {
  return (
    <div>
      <section className="section bg-white pt-5">
        <Container>
          {/* <Row className="row-grid align-items-center">
            <Col lg="12" className="text-center">
              <img
                src="https://gcn.com/articles/2020/04/30/-/media/GIG/EDIT_SHARED/Public-Safety/contacttracingapp.jpg"
                className="img-fluid"
                alt="Contact Tracing app"
              />
            </Col>
          </Row> */}
          <Row className="row-grid align-items-center">
            <Col lg="6">
              <h4 className="text-center">
                Learn how to become a Contact Tracer & earn $14 - $35/hour
              </h4>

              <p>&nbsp;</p>

              <p className="text-black">
                <iframe
                  width="100%"
                  height="355"
                  src={`https://www.youtube-nocookie.com/embed/yi88w-n2EEc?rel=0&showinfo=0&controls=0`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </p>

              <h2>What is Contact Tracing?</h2>

              <p className="text-black">
                Contact tracing is a full time commitment given the training
                requirement and access to various necessary systems. In order to
                work effectively, we will be scheduling people 7 days a week
                between 8am - 8pm, but not to exceed 40 hours per week. To learn
                more about contact tracing, you can complete the COVID-19{' '}
                <a href="https://www.coursera.org/learn/covid-19-contact-tracing">
                  Contact Tracing free course
                </a>
                .
              </p>

              <p>
                <img
                  src="https://images.ctfassets.net/cnu0m8re1exe/3pYZRtyScYgbMsH45LrsBt/040aa2a65c7f435ea0c36196d08d59b4/shutterstock_1689264058.jpg"
                  className="img-fluid"
                />
              </p>
            </Col>

            <Col lg="6">
              <iframe
                title="Form"
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

const PressReleaseContent = () => {
  return (
    <div>
      <section className="section bg-white">
        <Container>
          {/* <Row className="row-grid align-items-center">
            <Col lg="12" className="text-center">
              <img
                src="https://gcn.com/articles/2020/04/30/-/media/GIG/EDIT_SHARED/Public-Safety/contacttracingapp.jpg"
                className="img-fluid"
                alt="Contact Tracing app"
              />
            </Col>
          </Row> */}
          <Row className="row-grid align-items-center">
            <Col className="order-lg-1" lg="12">
              <Card className="shadow border-0 px-lg-5 py-lg-5">
                <h2>Press Release</h2>
                <p className="text-black">
                  A partnership of nonprofit organizations, health
                  professionals, business leaders and Ethiopian-American
                  citizens working in collaboration with the Ethiopian Embassy
                  has launched an initiative to connect Ethiopian Diaspora
                  members with contact tracing jobs across the United States.
                </p>
                <p className="text-black">
                  The initiative seeks to hire, train and deploy thousands of
                  Ethiopian Diaspora members to do contact tracing and thus put
                  newly jobless members in the community back to work.
                </p>
                <p className="text-black">
                  State and local governments across the United States are
                  building workforces of contact tracers to confront the
                  COVID-19 health crisis. Federal and State Governments have
                  budgeted billions of dollars and estimates for the number of
                  people needed nationwide for contact tracing range from
                  100,000 to as high as 300,000.
                </p>
                <p className="text-black">
                  Contact tracing can be done from home on a full- or part-time
                  basis. The work is mostly phone-based and pays an hourly wage
                  of $15 to $35. Work contracts typically range from 6 to 12
                  months.
                </p>
                <p className="text-black">
                  The responsibilities of contact tracers include calling all
                  contacts of anyone diagnosed with COVID-19, determining
                  exposure, assessing symptoms, referring for testing according
                  to established protocols, and providing them with instructions
                  for isolation or quarantine. Contact tracers will maintain
                  ongoing communication with contacts to assess symptoms, ensure
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
                  The initiative will work closely with the health departments
                  of State and local governments across the United States, as
                  well as with the Ethiopian Embassy, to mobilize and engage the
                  Ethiopian Diaspora community in battling the spread of
                  COVID-19 while helping unemployed members find well-paying
                  jobs as contact tracers.
                </p>
                <p className="text-black">
                  Contact tracers will be required to be computer literate and
                  have their own working telephone and computer/mobile
                  electronic device. In addition, a high school diploma is
                  required, while some college training is preferred. Applicants
                  must be 18 years of age or older and be legally authorized to
                  work in the US.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

const AboutUsContent = () => (
  <section className="section section-lg">
    <Container>
      <Row className="row-grid align-items-center">
        <Col md="12">
          <Card className="shadow border-0 px-lg-5 py-lg-5">
            <h2>Who we are</h2>
            <p>
              We are Ethiopian Diaspora member working with the Ethiopian
              Embassy in urgent national effort to identify &amp; screen
              eligible Ethiopian individuals interested in working or
              volunteering as contact tracers. We provide this information to
              organizations that are hiring contact tracing teams, helping them
              launch or expand their teams more quickly and efficiently.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
)

const AboutPage = () => {
  return (
    <>
      <MainLayout
        title="Ethiopians Helping Ethiopians Get Jobs"
        description="Lost your job? Consider becoming a contact tracer."
        cardStyle={true}
      >
        <AboutContent />
      </MainLayout>

      <AboutUsContent />

      <PressReleaseContent />
    </>
  )
}
export default AboutPage
