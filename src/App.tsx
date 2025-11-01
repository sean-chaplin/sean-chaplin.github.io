import { ToastContainer, Slide } from 'react-toastify';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <div className="flex items-center justify-between px-10 w-100 h-[80px] mb-[-40px]">
        <h1>{'Sean Chaplin / Software Engineer'}</h1>
        <div className="flex gap-8">
          <a href="#about">About</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>

      <div className="w-100 h-[900px] flex justify-center items-center">
        <div className="flex gap-[60px] justify-center">
          <img src="images/mugshot.png" className="w-[400px] h-[400px] rounded-2xl"/>
          <div className="flex flex-col gap-10 py-8 w-[440px]">
            <h1 className="text-7xl font-bold">
              Sean Chaplin
            </h1>

            <div className="w-100 h-[2px] bg-gray-med"/>

            <p id="about" className="text-gray-light text-2xl leading-[2]">
              React, TypeScript, Jest, Tailwind, Sass, AWS, Dev-Ops
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-gray-med">
        <div className="flex flex-col max-w-[1000px] fit-h-content">
          <h1 className="text-center text-4xl mb-6 mt-24 font-bold">
            {'./about-me'}
          </h1>

          <p className="text-xl leading-[1.67] mb-32">
            I've been programming since the age of 8, self-learning basic HTML and CSS, then JavaScript.
            During this time I also completed courses through freeCodeCamp.org.
            I went on to gain extensive experience with C# through hobby projects, before learning
            React and Typescript.
            <br/><br/>
            I have been working professionally for the last 2 years working full-time, gaining experience
            in frontend, backend and dev-ops.
          </p>
        </div>
      </div>

      <ContactForm/>

      <div className="flex w-100 justify-center items-center h-8 bg-gray-med">
        <p className="text-[#A0A0A0]">© Copyright Sean Chaplin</p>
      </div>

      <ToastContainer
        position="bottom-right"
        className="mb-16 [&>div]:bg-gray-dark"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </>
  );
}

export default App;
