import './App.css';
import Testimonial from './component/Testimonial';
import reviews from './data';

function App() {
  return (
    <div >
      <div>
        <h1>
          Our Testimonials
        </h1>
        <div></div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>

    </div>
  );
}

export default App;
