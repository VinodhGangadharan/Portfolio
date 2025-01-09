import img from './assets/Profile.png';

function Hero() {

  return (
    <>

      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            <h4 className="justify-left mt-5 text-2xl font-bold text-slate-200">
              Hello
            </h4>
            <h2 className="mt-5 justify-left text-slate-200 text-5xl font-bold">
              I'm Vinodh
            </h2>
            <p className="mt-5 justify-left text-2xl font-bold text-slate-100">
              A Software Developer, with a specialization in Full Stack Development.
            </p>
            <p className="flex gap-10 mt-5 text-amber-300">
              <a href="https://github.com/VinodhGangadharan" target="_blank"><i className="bi bi-github" style={{ fontSize: 25 }}></i></a>
              <a href="https://www.linkedin.com/in/vinodhgangadharan/" target="_blank"><i className="bi bi-linkedin" style={{ fontSize: 25 }}></i></a>
              <a href="mailto:writetovino@live.com" target="_blank"><i className="bi bi-envelope" style={{ fontSize: 25 }}></i></a>
              <a href="https://drive.google.com/file/d/1NmM22m4y6WLBI0RLYr-KQkWQ8bmTlLwg/view" target="_blank"><span className='font-bold text-2xl pr-4 text-sky-950'>Resume</span><i class="bi bi-caret-right" style={{fontSize:25}}></i>&nbsp;<i className="bi bi-file-person" style={{color:'blue', fontSize: 30 }}></i></a>
            </p>
            <p className='pt-6'>
            
            </p>
          </div>

        </div>

      </section>

    </>
  )
}

export default Hero