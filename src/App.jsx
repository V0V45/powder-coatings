import Header from './components/header/header';
import Banner from './components/banner/banner';
import ColorfulBlock from './components/colorful-block/colorful-block';
import WhoWeAre from './components/who-we-are/who-we-are';
import ColorSearchBlock from './components/color-search-block/color-search-block';

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <ColorfulBlock />
      <WhoWeAre />
      <ColorSearchBlock />
    </>
  );
}