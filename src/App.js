import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import Overview from './Components/Overview';
import CardsToday from './Components/CardsToday';

function App() {
  return (
    <div className="App">
      <div>

      </div>
      <div className="Cards">
        <Header />
        <Card name="@GimenoCrew" numberFollowers='1987' numberToday="12"/>
        <Card name="@DemendozaSculpture" numberFollowers='1044' numberToday="99"/>
        <Card name="@EsteveSegura" numberFollowers='11k' numberToday="1099"/>
        <Card name="@SirMosbito" numberFollowers='8239' numberToday="144" />
        <Overview/>
        <CardsToday tipo="Page Views" number="87" percent="3"/>
        <CardsToday tipo="Likes" number="52" percent="2"/>
        <CardsToday tipo="Likes" number="5462" percent="2257"/>
        <CardsToday tipo="Profile Views" number="52k" percent="1375"/>
        <CardsToday tipo="Retweets" number="117" percent="303"/>
        <CardsToday tipo="Likes" number="507" percent="553"/>
        <CardsToday tipo="Likes" number="107" percent="19"/>
        <CardsToday tipo="Total Views" number="1407" percent="12"/>
      </div>
    </div>
  );
}

export default App;
