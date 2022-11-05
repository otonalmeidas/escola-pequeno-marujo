import { Differentials } from '../components/Differentials/Differentials'
import { Footer } from '../components/Footer/Footer'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'
import { OurSchool } from '../components/OurSchool/OurSchool'
import { Teaching } from '../components/Teaching/Teaching'
import { Visit } from '../components/Visit/Visit'

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <Grid>
        <Teaching />
        <OurSchool />
        <Differentials />
        <Visit />
      </Grid>
      <Footer />
    </>
  )
}
