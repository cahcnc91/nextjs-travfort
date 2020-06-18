import Layout from '../components/layout'
import AboutSection from '../components/about-section';
import AcessoMovelSection from '../components/acesso-movel';
import ServicesSection from '../components/services/services'
import LocalizacaoSection from '../components/services/localizacao-section';
import Footer from '../components/footer';
import Clientes from '../components/clients'

export default function Home() {
  return (
    <Layout home>
      <AboutSection></AboutSection>
      <AcessoMovelSection></AcessoMovelSection>
      <Clientes></Clientes>
      <ServicesSection></ServicesSection>
      <LocalizacaoSection></LocalizacaoSection>
      <Footer></Footer>
    </Layout>
  )
}