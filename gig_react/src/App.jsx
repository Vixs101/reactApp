import logo from './assets/logo.svg'
import phone from './assets/phone.svg'
import lines from './assets/lines.svg'
import first from './assets/first.png'
import second from './assets/second.png'
import third from './assets/third.png'
import logopole from './assets/logopole.png'
import facebook from './assets/facebook.png'
import insta from './assets/insta.png'
import twitter from './assets/twitter.png'


function App() {
  return (
    <>
      <section className='flex flex-col justify-between items-center w-full h-64 pb-32 font-custom' style={{ backgroundColor: '#EC5E2A', height: '654px' }}>
        {/* nav bar */}
        <nav className='flex justify-around w-full font-light'>
          <img src={logo} alt="Logo" className='cursor-pointer h-24'/> {/*logo*/}
          {/* nav links */}
          <ul className='flex justify-between text-2xl text-white mt-3 '>
            <li className='mx-4 my-5'>
              <a href="blank">Home</a>
            </li>
            <li className='mx-4 my-5'>
              <a href="blank">Services</a>
              </li>
            <li className='mx-4 my-5'>
              <a href="blank">Contacts</a>
            </li>
          </ul>

          {/* nav bar contacts */}
          <div className='flex justify-between items-center text-xl text-white'>
            <img src={phone} alt="phone" className='w-24 h-10'/>
            <p>+421 940 355 485</p>
          </div>
        </nav>

        {/* background lines */}
        <img src={lines} alt="lines" style={{height: '556px'}} className='absolute top-26'/>

        {/* hero text */}
        <div className='flex flex-col w-5/12 text-white '>
        <h1 className='text-5xl font-bold mb-5'>Smart People Solving Many <span className='GFG'>Problems</span></h1>
        <p className='font-custom text'>ileum for this luem foreum lorem mdkelire lorem kdkrelorem lorem</p>
        </div>
        <button className='cursor-pointer bg-white p-3 rounded-full shadow-md shadow-white' style={{color: '#EC5E2A'}}>Make an appointment</button>
      </section>
      
      {/*secton2  */}
      <section className='flex flex-col justify-between items-center mt-5 font-custom'>
        <div className='flex flex-col items-center justify-between w-5/12 text-2xl'>{/*heading */}
          <h1 className='mb-5'>We Are Experts, When It Comes To</h1>
          <h1>Cleaning Services</h1>
        </div>
        <div className='flex gap-4 mt-10 mb-10'>{/*Images */}
          <img src={first} alt="roof cleaning" />
          <img src={second} alt="cleaning of fades" />
          <img src={third} alt="cleaning of windows" />
        </div>
        <h1 className='text-2xl mb-10'>How Does It Work For Us</h1>

        {/*Text div */}
        <div className='flex gap-24'>

          <div className='flex flex-col justify-between w-300'>
            <div className='flex gap-3 items-center' style={{color:'#EC5E2A'}}>
              <h2>01</h2>
              <hr className='w-244' style={{border: '1px solid #EC5E2A'}}/>
            </div>
            <h1 className='text-2xl mt-3 mb-3'>Consultation</h1>
            <p className='font-medium whitespace-wrap' style={{color:'#6C6868'}}>
            It Is Important That We Know About 
            You, You Can Call, Send An Email or
            Fill Out a Form. Then Comes The 
            Analysis Of Your Request And The 
            Proposal Of a Solution
            </p>
          </div>

          <div className='flex flex-col justify-between w-300'>
            <div className='flex gap-3 items-center' style={{color:'#EC5E2A'}}>
              <h2>02</h2>
              <hr className='w-244' style={{border: '1px solid #EC5E2A'}}/>
            </div>
            <h1 className='text-2xl mt-3 mb-3'>Price Calculation</h1>
            <p className='font-medium whitespace-wrap' style={{color:'#6C6868'}}>
            It Is Important That We Know About 
            You, You Can Call, Send An Email or
            Fill Out a Form. Then Comes The 
            Analysis Of Your Request And The 
            Proposal Of a Solution
            </p>
          </div>

          <div className='flex flex-col justify-between w-300'>
            <div className='flex gap-3 items-center' style={{color:'#EC5E2A'}}>
              <h2>03</h2>
              <hr className='w-244' style={{border: '1px solid #EC5E2A'}}/>
            </div>
            <h1 className='text-2xl mt-3 mb-3'>Implementation</h1>
            <p className='font-medium whitespace-wrap' style={{color:'#6C6868'}}>
            It Is Important That We Know About 
            You, You Can Call, Send An Email or
            Fill Out a Form. Then Comes The 
            Analysis Of Your Request And The 
            Proposal Of a Solution
            </p>
          </div>                    
        </div>
      </section>

      <footer className='flex gap-20 justify-between w-full h-325 mt-28 px-24 pt-24' style={{backgroundColor: '#0E0E0E'}}>
        <div className='mr-24'>
          {/* logo */}
          <div className='flex gap-2 items-center justify-between w-10 font-bold mb-10'>
            <img src={logopole} alt="logo" className='h-55' />
            <h1 className='text-2xl text-white'>CORDIS</h1>
          </div>

          <p className='font-semibold ' style={{color:'#6C6868'}}>
            We Go To Places That Makes Others Dizzy
          </p>     

          {/* icons */}
          <div className='flex gap-3'>
            <a href="blank"><img src={facebook} alt="facebook" /></a>
            <a href="blank"><img src={insta} alt="facebook" /></a>
            <a href="blank"><img src={twitter} alt="facebook" /></a>
          </div>    
        </div>

        <div className='text-10 font-semibold mr-16' style={{color:'#6C6868'}}>
          <h1 className='text-2xl text-white font-bold'>Contact Info</h1>
          <p>+421 940 355 485</p>
          <p>robo.cordis@gmail.com</p>
          <p>personal data protection</p>
        </div>

        <div className='text-10 font-semibold ml-24 mr-12' style={{color:'#6C6868'}}>
          <h1 className='text-2xl text-white font-bold'>Billing Information</h1>
          <p>Robert  Tho’th</p>
          <p>ID:54-638-241</p>
          <p>Tomasikova 12573/50E,831 04</p>
          <p>Bratislava-nove Mesto</p>
        </div>
      </footer>
      
    </>
  )
}

export default App
