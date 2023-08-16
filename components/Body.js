import Header from './Header'
import Footer from './Footer'
import Main from './Main'

export default function Body(props){
    return(
        <div className="flex flex-col min-h-screen">
        <Header />
        <Main handler={props.handler} data={props.data} />
        <Footer data={props.data} />
      </div >
    )
}