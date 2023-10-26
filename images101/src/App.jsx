import './App.css'
import Image from './Image.jsx'
import './Image.css'

function App() {
  const images = [
    {
      src: "https://t4.ftcdn.net/jpg/01/08/78/41/240_F_108784183_C9wLzXGnngdAjbQiLFheSMwOzNHF8uXB.jpg",
      caption: "Man",
    },
    {
      src: "https://t3.ftcdn.net/jpg/02/49/98/32/240_F_249983279_4xknvjjfaMPoAb7W9DWVN9ueoYz4KWgE.webp",
      caption: "Woman",
    },
    {
      src: "https://t3.ftcdn.net/jpg/01/18/96/20/240_F_118962018_aNiB2ANl5DFYbm2nUELQcMKabczdPRDp.jpg",
      caption: "Vehicle",
    },
    {
      src: "https://t3.ftcdn.net/jpg/05/16/27/58/240_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg",
      caption: "Avatar",
    },
  ];

  return (
    <div className='Container'>
      {images.map((image)=> {
        return (
          <Image src={image.src} caption={image.caption}/>
        )
      })}
    </div>
  )
}

export default App