import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  // Support both older env names and clearer VITE_EMAILJS_* names
  const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID || import.meta.env.VITE_SERVICE_ID
  const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || import.meta.env.VITE_TEMPLATE_ID
  const EMAILJS_KEY = import.meta.env.VITE_EMAILJS_KEY || import.meta.env.VITE_EMAIL_KEY

  const CONTACT_API = import.meta.env.VITE_CONTACT_API_URL

  const sendToApi = async (payload) => {
    const res = await fetch(CONTACT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      const text = await res.text()
      throw new Error(text || `API request failed (${res.status})`)
    }
    return res.json()
  }

  const sendWithEmailJS = () => {
    // Important: pass the actual env var values, not string literals
    return emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, form.current, EMAILJS_KEY)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const formData = new FormData(form.current)
      const payload = Object.fromEntries(formData.entries())

      if (!payload.name || !payload.email || !payload.message) {
        setStatus({ type: 'error', text: 'Please fill out name, email, and message.' })
        setLoading(false)
        return
      }

      if (CONTACT_API) {
        await sendToApi(payload)
      } else if (EMAILJS_SERVICE && EMAILJS_TEMPLATE && EMAILJS_KEY) {
        await sendWithEmailJS()
      } else {
        throw new Error('No contact backend configured. Set VITE_CONTACT_API_URL or EmailJS env vars.')
      }

      setStatus({ type: 'success', text: 'Message sent successfully!' })
      form.current.reset()
    } catch (err) {
      console.error('Contact send error:', err)
      setStatus({ type: 'error', text: err.message || 'Failed to send message.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
        <div id='contact'>Get Connected</div>
            <div className="contact-main-c">
                    <form className='form-container' ref={form} onSubmit={handleSubmit}>
                        <div className='name-container'>
                            <label className='name-txt' htmlFor="user_name">Your Name</label>
                            <input className='name-input' type="text" id="user_name" name="name" />
                        </div>
                        <div className='email-container'>
                            <label className='email-txt' htmlFor="user_email">Your Email</label>
                            <input className='name-input' type="email" id="user_email" name="email" />
                        </div>
                        <div className='message-container'>
                            <label className='message-txt' htmlFor="message">Type your message here!</label>
                            <textarea className='name-input' id="message" name="message" rows="4" />
                        </div>
                    <button className='contact-btn' type="submit" disabled={loading}>{loading ? 'Sending…' : 'Send'}</button>
            </form>
        </div>    

      {status && (
        <p className={status.type === 'error' ? 'error' : 'success'}>{status.text}</p>
      )}

      {!CONTACT_API && !(EMAILJS_SERVICE && EMAILJS_TEMPLATE && EMAILJS_KEY) && (
        <p className="note">No contact backend configured. Set VITE_CONTACT_API_URL or EmailJS env vars.</p>
      )}   
    </div>   
  )
}

export default Contact
