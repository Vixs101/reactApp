import logo from './assets/logo.svg'
import phone from './assets/phone.svg'
import map from './assets/map.png'
import location from './assets/location.png'
import call from './assets/call.png'
import gmail from './assets/gmail.png'
import logopole from './assets/logopole.png'
import facebook from './assets/facebook.png'
import insta from './assets/insta.png'
import twitter from './assets/twitter.png'

function App() {
  return (
    <>
      <section className='bg-img flex flex-col justify-between items-center w-full h-90 pb-64 font-custom' >
        <nav className='flex justify-around w-full font-light'>
          <img src={logo} alt="Logo" className='cursor-pointer h-24'/> {/*logo*/}
          {/* nav links */}
          <ul className='flex justify-between text-xl text-white mt-3 '>
            <li className='mx-4 my-5 color'>
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
          <div className='flex gap-1 items-center text-xl text-white color'>
            <img src={phone} alt="phone" className='w-20 h-10'/>
            <p>+421 940 355 485</p>
          </div>
        </nav>

       {/* hero text */}
       <div className='flex flex-col items-center w-6/12 text-white '>
        <h1 className='text-5xl font-bold mb-5'>Lets Work Together</h1>
        <p className='font-custom text-sm font-thin'>ileum for this luem foreum lorem mdkelire lorem kdkrelorem lorem</p>
        </div>

        <button className='btn cursor-pointer p-3 rounded-full w-56'>
          Make an appointment</button>        
      </section>

      <section className=''>
        <div className='relative bottom-80 mainBg h-100 py-80 pl-28 pr-28'>
          <div className='w-68 h-786 bg-white flex'>
            <div className='bg-white h-full w-34'>
              <img src={map} alt="map" className='mb-10' />

              <h2 className='ml-10 mb-5 text-xl font-semibold'>Areas of Operation</h2>
              <div className='ml-12 mb-5 flex gap-4 color1 font-medium'>
                <img src={location} alt="location icon" />
                <p>Trnava,Bratislava and nitra regions</p>
              </div>
              <h2 className='ml-10 mb-5 text-xl font-semibold'>Our Contact Number</h2>
              <div className='ml-12 mb-5 flex gap-4 color1 font-medium'>
                <img src={call} alt="phone icon" />
                <p>+421 940 355 485</p>
              </div>
              <h2 className='ml-10 mb-5 text-xl font-semibold'>Our gmail contact</h2>
              <div className='ml-12 mb-5 flex gap-4 color1 font-medium'>
                <img src={gmail} alt="mail icon" />
                <p>robo.cordis@gmail.com</p>
              </div>

            </div>
            {/* form */}
            <div className='flex flex-col items-center h-full w-34 mt-10'>
              <h1 className='font-semibold text-2xl'>Tell Us About Yourself</h1>
              <form className="mt-4 w-30">
                <div className="mb-4">
                  <label htmlFor="name" className="block font-semibold">
                    Name <span className='text-2xl color'> *</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full mb-5 px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                  <label htmlFor="telephone" className="block font-semibold">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    className="w-full mb-5 px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block font-semibold">
                    Email <span className='text-2xl color'> *</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full mb-5 px-3 py-2 border rounded shadow"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block font-semibold">
                    Message <span className='text-2xl color'> *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full mb-5 px-3 py-2 border rounded shadow"
                    rows="4"
                    ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn text-white font-semibold py-2 px-4 w-24 rounded-full"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

          </div>

        </div>
      </section>        

      <footer className='flex gap-20 justify-between w-full h-325 px-24 pt-24' style={{backgroundColor: '#0E0E0E'}}>
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
