import { useState, useEffect } from "react"


function App() {

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [home, setHome] = useState("");

  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Alex Costa',
      subject: 'Science Group',
      home: 'Florida'
    },
    {
      id: 2,
      name: 'Blake Lively',
      subject: 'Arts',
      home: 'Reeding'
    },
    {
      id: 3,
      name: 'Natalie Portman',
      subject: 'Humanities',
      home: 'Portland'
    },
    {
      id: 4,
      name: 'Aron Smith',
      subject: 'Management',
      home: 'Long Island'
    }
])

  function onSubmit(e) {
    e.preventDefault();
    setStudents([...students, {id:students[students.length-1].id + 1, name:name, subject:subject, home:home}])
    setName('');
    setSubject('');
    setHome('');
  }



  return (
    <div className="w-1/2 mx-auto">
      {students.map((student) => 
        <div>
          <div className="focus:outline-none mb-4 my-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-4 px-4 bg-white rounded-md">
            {student.name}
          </div>
        </div>)
      }

      <div className="bg-gray-100 p-4">
        <form onSubmit={onSubmit} >

          <div className="flex space-x-6 mb-5">
            <label htmlFor="username">Name:</label>
            <input type="text"  name="username" value={name} onChange={(e) => setName(e.target.value)} className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
          </div>

          <div className="flex space-x-6 mb-5">
            <label htmlFor="subject">Subject:</label>
            <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
          </div>

          <div className="flex space-x-6 mb-5">
            <label htmlFor="home">Home:</label>
            <input type="text" name="home" value={home} onChange={(e) => setHome(e.target.value)} 
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
          </div>

          <input type="submit" value={"Submit"} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer" />
        </form>
      </div>


    </div>
  )
}

export default App
