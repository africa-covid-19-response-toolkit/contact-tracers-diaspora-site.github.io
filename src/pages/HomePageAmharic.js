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
                ውድ ስራ ፋላጊ ኢትዮጵያኖች የስራ እድል ክፍያ $14 እስከ $35 በሰአት የ COVID-19 የንክኪ
                የለይቶ ማውጣትን "Contact Tracer" ስራ ለመመዝገብ ከስር ያለውን ሊንክ ይጫኑ
              </h4>

              <p>&nbsp;</p>

              <p className="text-black">
                <iframe
                  width="100%"
                  height="250"
                  src={`https://www.youtube-nocookie.com/embed/yi88w-n2EEc?rel=0&showinfo=0&controls=0`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </p>

              <p>&nbsp;</p>

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

              <p>&nbsp;</p>
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
                height="1200"
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
                <h2>ጋዜጣዊ መግለጫ</h2>
                <p className="text-black">
                  ውድ ኢትዮጵያኖች በዚህበምንኖርበት ከተማ የኮቪድ 19 ቁጥር ከቀን ወደ ቀን እየጨመረ መምጣቱ እና
                  አሳሳቢ ደረጃ ላይ እንደደረሰ የምታውቁት ነገር ነው:: በመሆኑም በዋሽንግተን ዲሲ የሚገኘው ኤምበሲ
                  ከማንኛውም ግዜ በበለጠ ከዳያስፖራው ጋ በመቆም እና እሁን ዳያስፓራውን ያጋጠመው ከስራ ገበታ
                  መስናበት እንዲሁም በስራ ማጣት ምክንያት ህልውናችው አስጊ ሁኔታ ላይ ያላችሁትን ወገኖች ከግምት
                  በማስገባት ኤምባሲው የሚከተለውን መረጃ ሊያቀርብላችው ግድ ይለዋል::
                </p>

                <p className="text-black">
                  በስጋው እዚህ በነፍሱ ግን አገሩ ያለው እናንተ ኢትዮጵያኖች ለአገር እና ለወገኖቻችው እስከዛሬ
                  ድረስ የጀርባ አጥንት ሆናችሁ ለተፈናቀለው: ለተራበው: ለታረዘው እርዳታ ስትጠየቁ በደስታ
                  ስትለግሱና ለወገን ስትደርሱ የነበራችው ናችው::
                </p>

                <p className="text-black">
                  አሁን ደግሞ እኛ ለናንተ የምንደርስበት ግዜ በመሆኑ የተለያዩ የህክምና ባለሞያዎች, ባለ ሀብቶች,
                  የተማሩ ግለሰቦች ከኤምባሲው ጋ በመተባበር ለእናንተ የስራ እድል ፈጥሯል::
                </p>

                <p className="text-black">
                  ይህንንም መረጃ የኢምባሲው ድህረ ገፅ በመግባት ስለ ስራው ሙሉ መረጃ ያገኛሉ:: እርግጥ ነው ይህ
                  ወረርሽኝ በአገራችንም ይህ ነው የማይባል ችግር ዜጎቻችን ላይ እንደሚያደርስ ግልፅ ነው በመሆኑም
                  መንግስት, እርዳታ ሰጪ ድርጅቶች እንዲሁም ግለሰቦች ሊመጣ ለሚችለው ችግር አስቀድመው እየተረባረቡ
                  ይገኛሉ::
                </p>

                <p className="text-black">
                  ኤምባሲው ዳያስፓራውን በገጠመው አለም አቀፋዊው ውድቀት በሚችለው አቅም ሁሉ ሊታደጋችው ተግቶ
                  እየሰራ ይገኛል::
                </p>

                <p className="text-black">
                  ከላይ እንደተገለፅውም በድህረ ግፃችን ገብታችው የስራ ማመልከቻውን ቅፅ መሙላት ትችላላችው::
                </p>

                <p className="text-black">
                  በዚህ አጋጣሚም በዚህ ቫይረስ ህይወታቸውን ላጡ ኢትዮጵያውያን ነፍሳቸውን ይማር እያልን
                  ለቤተሰቦቻቸው ደግሞ መፅናናትን እንመኛለን::
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

const HomePage = () => {
  return (
    <>
      <MainLayout
        title="🇪🇹 ኢትዮጵያውያን ስራዎችን እንዲያገኙ ኢትዮጵያውያንን መርዳት"
        description="ለስራ ፈላጊዎች የcovid 19 የንክኪ የለይቶ ማውጣትን ስራ ለመመዝገብ ከስር ያለውን ሊንክ ይጫኑ"
        cardStyle={true}
        language="amharic"
      >
        <AboutContent />
      </MainLayout>

      <AboutUsContent />

      <PressReleaseContent />
    </>
  )
}
export default HomePage
