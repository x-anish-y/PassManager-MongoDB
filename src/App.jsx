import { useState, useRef, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { configs } from 'eslint-plugin-react-refresh';
import Footer from './components/Footer';


function App() {
  const ref = useRef()
  const passref = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])


  const getPasswords = async () => {
    let req = await fetch("http://localhost:3000/")
    let passwords = await req.json()
    console.log(passwords)
    setpasswordArray(passwords)
  }

  useEffect(() => {
    getPasswords()

  }, [])

  const copyText = (text) => {
    toast('Copied to Clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
    navigator.clipboard.writeText(text)
  }


  const showPassword = () => {
  if (ref.current.src.includes("closeeye.svg")) {
    alert("Show password");
    ref.current.src = "/openeye.svg";
    passref.current.type = "text";
  } else {
    passref.current.type = "password";
    ref.current.src = "/closeeye.svg";
  }
};

  const savePassword = async () => {
    if (form.site && form.username && form.password.length > 3) {
      toast('Password Saved Successfully!', {
        position: "top-right",
        autoClose: 3000,
        theme: "dark"
      });

      const isEditing = !!form.id;
      let newPasswordArray;
      let newEntry;

      if (isEditing) {
        newEntry = form;
        newPasswordArray = passwordArray.map(item =>
          item.id === form.id ? newEntry : item
        );

        await fetch("http://localhost:3000/", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: form.id })
        });
      } else {
        newEntry = { ...form, id: uuidv4() };
        newPasswordArray = [...passwordArray, newEntry];
      }

      await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry)
      });

      setpasswordArray(newPasswordArray);
      setform({ site: "", username: "", password: "" });
    } else {
      toast('Invalid input! Fill all fields correctly.', {
        position: "top-right",
        autoClose: 3000,
        theme: "dark"
      });
    }
  };

  const editPassword = (id) => {
    console.log("Editing", id);
    const selected = passwordArray.find(i => i.id === id);
    setform(selected);
  };

  const deletePassword = async (id) => {
    let c = confirm("Do you really want to delete this Password?")
    if (c) {
      toast('Password Deleted Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
      setpasswordArray(passwordArray.filter(item => item.id !== id))
      let res = await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: id }) })
    }
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }




  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />

      <Manager />

      <div className="flex flex-col items-center mt-[40px] mx-auto space-y-3">
        <h1>
          <span className='text-[#63e] text-5xl'>&lt;</span>
          <span className="text-5xl text-white">PassManager</span>
          <span className='text-[#63e] text-5xl'>/&gt;</span>
        </h1>
        <h5 className='text-white'>Your own Password Manager</h5>
      </div>

      <div className='text-white container mx-auto flex flex-col items-center justify-center w-full space-y-5 mt-[70px]'>
        <div className='border-[0.1px] border-white rounded-2xl'><input type="text" value={form.site} onChange={handleChange} name="site" placeholder='Enter Website URL' id="site" className='mx-2 p-1.5 outline-none w-[50vw]' /></div>

        <div className='flex flex-row gap-4'>
          <input type="text" value={form.username} onChange={handleChange} name="username" placeholder='Enter Website name' id="username" className='border-[0.1px] border-white pl-3 rounded-2xl p-1.5 outline-none w-[25vw]' />

          <span className='border-[0.1px] flex w-[25vw] border-white px-3 gap-1.5 rounded-2xl'><input ref={passref} type="password" value={form.password} onChange={handleChange} name="password" placeholder='Enter Password' id="password" className=' p-1.5 outline-none w-full' /><img className='cursor-pointer' ref={ref} onClick={showPassword} src="/closeeye.svg" alt="" /></span>
        </div>

        <div>
          <button onClick={savePassword} className='flex items-center justify-center gap-1.5 font-bold text-2xl border-[0.1px] transition-all hover:bg-[#63e] bg-[#6533ee91] border-white rounded-4xl px-3 pr-3.5 p-2'><lord-icon
            src="https://cdn.lordicon.com/hrtsficn.json"
            trigger="in"
            delay="150"
            state="in-reveal"
            colors="primary:#ffffff">
          </lord-icon>Save</button>
        </div>
      </div>

      <div className='text-white mx-auto container space-y-5 my-9'>
        <h2 className='text-2xl mx-[3vw] mb-6 font-bold'>Your Passwords</h2>
        {passwordArray.length === 0 && <div className='w-full flex justify-center'>No Passwords</div>}
        {passwordArray.length != 0 &&
          <div className="table-container">
            <table className="w-full border-collapse bg-[#6533ee3b]">
              <thead className="bg-[#552dc5] sticky top-0 z-10">
                <tr>
                  <th className="py-2 text-white">Website URL</th>
                  <th className="py-2 text-white">Website Name</th>
                  <th className="py-2 text-white">Password</th>
                  <th className="py-2 text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((item, index) => {
                  return <tr key={index} className="border-b border-[#552dc5]/30">
                    <td className="py-2 text-center"><div className='flex justify-center gap-2.5 items-center' ><a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        item.site.startsWith("http://") || item.site.startsWith("https://")
                          ? item.site
                          : `https://${item.site}`
                      }
                    >
                      {item.site}
                    </a>
                      <span onClick={() => copyText(item.site)} className="material-symbols-outlined cursor-pointer">content_copy</span></div></td>
                    <td className="py-2 text-center"><div className='flex justify-center gap-2.5 items-center'>{item.username}<span onClick={() => copyText(item.username)} className="material-symbols-outlined cursor-pointer">content_copy</span></div></td>
                    <td className="py-2 text-center"><div className='flex justify-center gap-2.5 items-center'>{'*'.repeat(item.password.length)}
                      <span onClick={() => copyText(item.password)} className="material-symbols-outlined cursor-pointer">content_copy</span></div></td>
                    <td className="py-2 gap-5 text-center"><lord-icon onClick={() => editPassword(item.id)} className="cursor-pointer"
                      src="https://cdn.lordicon.com/vwzukuhn.json"
                      trigger="in"
                      delay="150"
                      stroke="bold"
                      state="in-reveal"
                      colors="primary:#6c16c7,secondary:#6c16c7,tertiary:#6c16c7,quaternary:#ffffff">
                    </lord-icon><lord-icon onClick={() => deletePassword(item.id)} className="cursor-pointer"
                      src="https://cdn.lordicon.com/sxhqklqh.json"
                      trigger="in"
                      delay="150"
                      stroke="bold"
                      state="in-reveal"
                      colors="primary:#6c16c7,secondary:#ffffff,tertiary:#000000">
                      </lord-icon></td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        }
      </div>

      <Footer />
    </>
  )
}

export default App
