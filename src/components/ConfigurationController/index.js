import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeft = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRight = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="div">
          <h1>Layout</h1>
          <input
            type="checkbox"
            id="content"
            onChange={onChangeContent}
            checked={showContent}
          />
          <label htmlFor="content">Content</label>
          <input
            type="checkbox"
            id="left"
            onChange={onChangeLeft}
            checked={showLeftNavbar}
          />
          <label htmlFor="left">Left Navbar</label>
          <input
            type="checkbox"
            id="right"
            onChange={onChangeRight}
            checked={showRightNavbar}
          />
          <label htmlFor="right">Right Navbar</label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
