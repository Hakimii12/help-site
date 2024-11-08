import Nav from '../../components/Nav'
import '../../styles/globals.css'
export const metadata={
    title: "promptopis",
    description:'discover and share AI prompts'
}
function Layout({ children}) {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default Layout
