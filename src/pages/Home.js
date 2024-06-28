import React from 'react'
import HeroSection from '../components/HeroSection';
import image from '../images/why.png';
export default function Home() {
const p1='Leading';
const p2='ISO Certification';
const p3='Body in India';
const line1="- India's Leading Authorized ISO Certification Body";
const line2="- 10 Yrs. Experience Across Varies ISO Standards"
const line3="- Worldwide Acceptable ISO Certificate";
const line4="- Extensive Audit Report";
const line5="- 24x7 Customer Support";
const name="MLR ISO";
const paragraph="The International Organization for Standardization (ISO) management standards are a series of frameworks that help you run your business effectively. ISO certification is proof from a third party, such as ourselves that you comply with an ISO management standard. ISO certification gives your organization credibility. ISO (International Organization for Standardization) is a worldwide federation of national standards bodies. Member organizations collaborate in the development and promotion of international standards for technology, scientific testing processes, working conditions, societal issues and more. ISO and its members then sell documents detailing these standards. This approval is typically valid for a period of three years, after which the company must recertify that its procedures meet the current form of the standard. This process is to be monitored by the registrar during that period of time.";

  return (
    <div>
        <HeroSection p1={p1} p2={p2} p3={p3} line1={line1} line2={line2} line3={line3} line4={line4} line5={line5} name={name} paragraph={paragraph} image={image}/>
    </div>
  )
}
