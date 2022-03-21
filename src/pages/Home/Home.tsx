import styles from "./Home.module.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";

const Home = () => {
  return (
    <div data-testid="home-component">
        <Header headerText={
              <strong>
                  Welcome To This&nbsp;
                  <strong className='text-pink-500'>
                      Awesome
                  </strong> 
                  App
              </strong>
            }  
            heroText="It doesn't matter if you come from the inner city.
            People who fail in life are people who find lots of excuses. 
            It's never too late for a person to recognize that they have potential in themselves."
            heroTextAuthor="Ben Carson"
        />
      <div className={`${styles.body}`}>
        <h1 className="pt-10">
          <strong className="text-pink-500 text-3xl" data-testid="title">
              Search
          </strong>
        </h1>
        <Search />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
