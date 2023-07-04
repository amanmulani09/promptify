import '@styles/global.css' 
import Nav from '@components/Nav'
import Provider from '@components/Provider'
export const metadata = {
    title:'Promtify',
    description: 'Discover & share AI Prompts'
}
const RootLayout = ({children}) => {
  return (
   <html lang='en'>
<body>
    <div className="main">
        <div className="gradient">

        </div>
        <div className="app">
            <Nav />
            {children}
        </div>
    </div>
</body>
   </html>
  )
}

export default RootLayout