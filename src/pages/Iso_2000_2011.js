import React from 'react'
import HeroSection from '../components/HeroSection';

export default function Iso_2000_2011() {
  const p1='ISO 20000-1:2011 Service management system requirements';
const p2='Start @ 6000/- Onwards';
const p3='';
const line1="- India's Leading Authorized ISO Certification Body";
const line2="- 10 Yrs. Experience Across Varies ISO Standards"
const line3="- Worldwide Acceptable ISO Certificate";
const line4="- Extensive Audit Report";
const line5="- 24x7 Customer Support";
const name="ISO 20000:2011";
const paragraph="ISO/IEC 20000-1 is correct for any service provider, large or little, UN agency needs to supply assurance among the standard of the services they deliver. It’s normally used for IT services, facilities management and business services to help guarantee effective and resilient services in today’s dynamical service delivery setting.Internationally recognized, ISO/IEC 20000-1 is that the simplest follow framework for a service management system that helps you to supply an everyday, reliable service. It supports you to implant a service lifecycle strategy into your organization - providing best follow steering on the thanks to manage your portfolio of services so as that they keep current and add worth.";

  return (
    <div>
      <HeroSection p1={p1} p2={p2} p3={p3} line1={line1} line2={line2} line3={line3} line4={line4} line5={line5} name={name} paragraph={paragraph} />
    </div>
  )
}
