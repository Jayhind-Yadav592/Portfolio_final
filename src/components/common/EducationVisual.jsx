import React from 'react'
import knrrCollegeImg from '../../assets/knrr-college-campus.jpg'
import jpInterCollegeImg from '../../assets/jp-inter-college.jpg'
import chachaNehruSchoolImg from '../../assets/chacha-nehru-school.jpg'

export default function EducationVisual({ type }) {
  if (type === 'college') {
    // Ultra HD Photorealistic Campus Image of Kasireddy Narayanreddy College
    return (
      <div className="w-full h-full relative overflow-hidden bg-slate-100 select-none">
        <img
          src={knrrCollegeImg}
          alt="Kasireddy Narayanreddy College of Engineering and Research Campus"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
      </div>
    )
  }

  if (type === 'senior-school') {
    // Ultra HD J.P. Inter College Campus (Uttar Pradesh)
    return (
      <div className="w-full h-full relative overflow-hidden bg-slate-100 select-none">
        <img
          src={jpInterCollegeImg}
          alt="J.P. Inter College Campus"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
      </div>
    )
  }

  // Matriculation / High School (Ultra HD Chacha Nehru Hindi High School Campus)
  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-100 select-none">
      <img
        src={chachaNehruSchoolImg}
        alt="Chacha Nehru Hindi High School Campus"
        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
