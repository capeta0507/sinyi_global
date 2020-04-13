import Document, { Html, Head, Main, NextScript} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
  // render(){
  //   return(
  //     <Html>
  //       <Head>
  //         <body>
  //           <div class="load_block">
  //             <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 
  //           </div>
  //           <Main />
  //           <NextScript />
  //           <script dangerouslySetInnerHTML={{__html: `
  //             window.addEventListener("load", function(){
  //               const loader = document.querySelector('.load_block');
  //               loader.className += ' hidden' // class "loader hidden"
  //             });
  //           `}} />
  //         </body>
  //       </Head>
  //     </Html>
  //   )
  // }
}