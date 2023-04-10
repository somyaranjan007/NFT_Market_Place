import React from "react"

/* importing all the components are needed */
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const Layout = ({ children }) => {
	return (
		<main>
			<Header />
			{children}
			<Footer />
		</main>
	)
}

export default Layout 