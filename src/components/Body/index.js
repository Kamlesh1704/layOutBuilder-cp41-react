import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        const getLeft = () => {
          return (
            <>
            <h1>Left Navbar Menu</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
            </>
          )
        }

        const getContent = () => {
          return (
            <>
              <h1>Content</h1>
              <p>Lorem ipsum jdfgsfd fg ffg gfg f gfgfgffgf</p>
            </>
          )
        }

        const getRight = () => {
          return (
            <>
              <h1>Right Navbar</h1>
              <ul>
                <li>Ad 1</li>
                <li>Ad 2</li>
              </ul>
            </>
          )
        }

        return (
          <>
            {showLeftNavbar && getLeft()}
            {showContent && getContent()}
            {showRightNavbar && getRight()}
          </>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Body
