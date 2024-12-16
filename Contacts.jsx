
const Contacts = () => {
  return (
    <div id="contacts" className="flex min-h-[70vh] min-w-full items-center justify-center">

      <div className="flex flex-col items-cetner justify-center gap-3 space-y-6 p-14"> 
        <h1 className="text-center text-5xl md:text=7xl">
          <span>Contact Me</span>
        </h1>

        <p className="text-center text-lg font-semibold text-grey-500">
          Use this button to contact me through Email
        </p>

        <a href="mailto:joseph.thomas.armstrong@gmail.com" className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600">Contact Me</a>

        <p className="text-center text-lg font-semibold text-grey-500">
          Use this button to view my github </p>

         <a href="https://github.com/armstrongj862" className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600">Click here</a>


        
      </div>
    </div>
  )
}

export default Contacts