import React, { useEffect, useState } from 'react'
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Docs } from "./components/docs";
import JsonData from "./data/data.json";

export default function LandingPage() {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
	  setLandingPageData(JsonData);
	}, []);
  
	return (
	  <div>
		<Navigation />
		<Header data={landingPageData.Header} />
		{/* <Features data={landingPageData.Features} /> */}
		<About data={landingPageData.About} />
		{/* <Services data={landingPageData.Services} /> */}
		<Gallery data={landingPageData.Gallery} /> 
		{/* <Testimonials data={landingPageData.Testimonials} /> */}
		<Team data={landingPageData.Team} />
		<Docs data = {landingPageData.Docs} />
	  </div>
	);
}
