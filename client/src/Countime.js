










// // import { useState } from 'react'



// // const Countime = () => {

// // const [city, setCity] = useState([])
// // const [result, setResult] = useState("0")


// // const HandleSubmit = (e) => {
// //   e.preventDefault();
// //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=24b9168e3b41ee0d13100e55f329cfb6`)
// //   .then(res=>res.json())
// //   .then(result=>{
// //     const kelvin=result.main.temp;
// //     const celius=kelvin -273.15;
// //     setResult(Math.round(celius))
// //   })
// // }


// //   return (
// //     <div>
// //       <form onSubmit={HandleSubmit}>
// //         <input type='text' placeholder='enter some city name' value={city} onChange={(e) => setCity(e.target.value)} />
// //         <br />
// //         <button type="submit">Submit</button>
// //       </form>
// //       <h2>{result}</h2>
// //     </div>
// //   )
// // }

// // export default Countime



// import React, { useState } from 'react'

// const Countime = () => {

//   const [count,setCount]=useState(0)
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={(e)=>setCount(count + 1)}>inc</button>
//       <button onClick={(e)=>setCount(count - 1)}>dec</button>
//     </div>
//   )
// }

// export default Countime