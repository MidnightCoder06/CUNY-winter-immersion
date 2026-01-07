'use client'

import { useState } from 'react'
import './styles.css'

export default function DebuggingExercise() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  // BUG #1: Form validation that doesn't work properly
  // The validation runs but doesn't prevent submission
  const validateForm = () => {
    const newErrors = {}
    
    // BUG: Using = instead of === and wrong logic
    if (formData.name.length = 0) {
      newErrors.name = 'Name is required'
    }
    
    // BUG: Email validation regex is broken (missing @ check effectively)
    if (!formData.email.includes('.')) {
      newErrors.email = 'Please enter a valid email'
    }
    
    // BUG: Bio validation checks wrong condition
    if (formData.bio.length > 0) {
      newErrors.bio = 'Bio must not be empty'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // BUG #2: This will crash the page when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // BUG: Accessing property of undefined - will crash
    const userData = undefined
    console.log('Submitting:', userData.profile.name)
    
    if (validateForm()) {
      setSubmitted(true)
    }
  }

  // BUG #3: Input handler has issues
  const handleChange = (e) => {
    // BUG: Wrong way to access event properties, also mutates state directly
    formData[e.target.name] = e.target.value
    setFormData(formData)
  }

  return (
    <div className="debug-container">
      {/* BUG #4: CSS - Header has z-index issue, will be behind other elements */}
      <header className="debug-header">
        <h1>Student Profile Registration</h1>
        <p>Fill out the form below to create your profile</p>
      </header>

      <main className="debug-main">
        {/* BUG #5: CSS - This card has broken flexbox and overflow issues */}
        <div className="profile-card">
          <div className="card-header">
            {/* BUG #6: Image src is broken */}
            <img 
              src="/images/profile-placeholder.png" 
              alt="Profile" 
              className="profile-image"
            />
            <h2>Create Your Profile</h2>
          </div>

          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {/* BUG #7: Error display logic is inverted */}
              {!errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {!errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="bio">Short Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                rows={4}
              />
              {!errors.bio && <span className="error">{errors.bio}</span>}
            </div>

            {/* BUG #8: CSS - Button styling is broken */}
            <button type="submit" className="submit-btn">
              Create Profile
            </button>
          </form>

          {/* BUG #9: Success message has CSS issues - text color same as background */}
          {submitted && (
            <div className="success-message">
              Profile created successfully!
            </div>
          )}
        </div>

        {/* BUG #10: CSS - Sidebar has positioning issues, overlaps content */}
        <aside className="debug-sidebar">
          <h3>Tips</h3>
          <ul>
            <li>Use a professional photo</li>
            <li>Keep your bio concise</li>
            <li>Double-check your email</li>
          </ul>
        </aside>
      </main>

      {/* BUG #11: CSS - Footer is not at bottom, has wrong colors */}
      <footer className="debug-footer">
        <p>© 2026 CUNY Winter Immersion</p>
      </footer>
    </div>
  )
}

