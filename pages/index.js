import Layout from '../components/layout'
import AboutSection from '../components/about-section';
import AcessoMovelSection from '../components/acesso-movel';
import ServicesSection from '../components/services/services'
import LocalizacaoSection from '../components/map/localizacao-section';
import Footer from '../components/footer';
import Clientes from '../components/clients';
import ContatoSection from '../components/contato';
import WhatsAppButton from '../components/whatsapp-button/whatsapp-button';
import HeroSection from "../components/hero-section";

export default function Home() {
  return (
    <Layout home>
      <WhatsAppButton></WhatsAppButton>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <AcessoMovelSection></AcessoMovelSection>
      <LocalizacaoSection></LocalizacaoSection>
      <Clientes></Clientes>
      <ContatoSection></ContatoSection>
      <Footer></Footer>
    </Layout>
  )
}