import Head from 'next/head'

import { Depositions } from '../components/Depositions/Depositions'
import { Differentials } from '../components/Differentials/Differentials'
import { Footer } from '../components/Footer/Footer'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { HeroHigh } from '../components/HeroHigh/HeroHigh'
import { OurSchool } from '../components/OurSchool/OurSchool'
import { Teaching } from '../components/Teaching/Teaching'
import { Visit } from '../components/Visit/Visit'
import { WhatsApp } from '../components/WhatsApp/WhatsApp'

export default function Index() {
  return (
    <>
      <Head>
        <title>Escola Pequeno Marujo</title>
      </Head>
      <Header />
      <HeroHigh />
      <Grid>
        <Teaching />
        <OurSchool />
        <Differentials />
        <Depositions />
        <Visit />
      </Grid>
      <Footer />
      <WhatsApp />
    </>
  )
}
