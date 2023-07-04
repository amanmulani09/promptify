import '@styles/global.css' 
import { Children } from 'react'
export const metadata = {
    title:'Promtify',
    description: 'Discover & share AI Prompts'
}
const RootLayout = () => {
  return (
   <html lang='en'>
<body>
    <div className="main">
        <div className="gradient">

        </div>
        <div className="app">
            {Children}
        </div>
    </div>
</body>
   </html>
  )
}

export default RootLayout