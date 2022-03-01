import React, {useState} from 'react'
import Swal from 'sweetalert2';
import axios from 'axios'
import './Statistics.css'

function Statistic() {
  const basedUrl =
  "https://api.shrtco.de/v2/shorten?url="; /* www.titan22.com/ */
    const [link, setLink] = useState('')
    const [error, setError] = useState('')
    const [shortLink, setShortLink] = useState([])
    const [inputError, setInputError] = useState('input')


    const submit = (e)=>{
      e.preventDefault()

      if(!link){
        setError('Please add a link')
        setInputError('inputError')
      }
      else{
        axios.post(basedUrl+link).then((res)=>{
          
          setShortLink((shortLink)=>[
            ...shortLink, res.data.result
          ])
          setLink('')
          setInputError('input')
        }).catch(error=>{
          alert('Invalid Link')
        })
       
        setError('')
      }
    }

    const copyClipboard = async link =>{
      try{
        await navigator.clipboard.writeText(link)
       
       
      }catch(err){
       
      }
    }

    const successMessage=()=>{
      Swal.fire({
       
        icon: 'success',
        title: 'Copied to clipboard',
        showConfirmButton: false,
        timer: 1500
      })
    }

    const copyId = (id)=>{
       shortLink.map((links)=>{
        if(links.code
          != id){
       
        }else{
         successMessage()
        }
        })
    }

 

  return (
    <div className='statistics-container '>
        <div className='statistics-content bd-container'>
            <div className='statistics-link-input'>
             <form onSubmit={submit}>
             <input type="text" className={inputError}  placeholder='Shorten a link here...'
                value={link}
                onChange={(e)=>{setLink(e.target.value)}}/>
              
              <input type="submit"  value='Shorten It!'/>
              
             </form>
             <p className='error'>{error}</p>
             
            </div>

            {shortLink.map((links)=>{
              return(
                <div key={links.code} className='link-result'>
                  <p className='link-original'>{links.original_link}</p>

                  <div className='divider'></div>

                  <div className='link-shorten'>
                    <p className='short-link'>{links.short_link}</p>
                    <button className='copy-links'
                     onClick={()=>{copyClipboard(links.short_link); copyId(links.code) }} >Copy</button>
                  </div>
                </div>
              )
            })}

            <div className='statistic-info'>
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
            </div>


            <div className='card-container'>
              <div className='line'></div>
              <div className='card-content'>
                <div className='card'>
                  <div className='card-logo1'></div>
                  <span>Brand Recognition</span>
                  <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. </p>
                </div>

                <div className='card'>
                  <div className='card-logo2'></div>
                  <span>Detailed Records</span>
                  <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. </p>
                </div>

                <div className='card'>
                  <div className='card-logo3'></div>
                  <span>Fully Customizable</span>
                  <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement. </p>
                </div>

              </div>
            </div>
        </div>
    </div>
  )
}

export default Statistic
