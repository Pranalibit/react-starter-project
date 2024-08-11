import img from './assets/react-core-concepts.png';
import Header from './components/Header.jsx';
import {CORE_CONCEPTS} from './data.js';

function CoreConcepts({image, title, description}) {
    return (
        <div>
            <li>
        <img src={image}/>
        <p>{title}</p>
        <h3>{description}</h3>
        </li>
        </div>
        );
    }

function App() {
  return (
    <div>
        <Header/>
      <main>
          <section id="core-concepts">
              <h2>Core-Concepts</h2>
              <ul>
{/*                   here props name are similar to proerty name of object then you can use spread operator to pull out key value pair from data */}
                  <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
                  <CoreConcepts {...CORE_CONCEPTS[1]}/>
                  <CoreConcepts {...CORE_CONCEPTS[2]}/>
                  <CoreConcepts {...CORE_CONCEPTS[3]}/>
                  </ul>
              </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
