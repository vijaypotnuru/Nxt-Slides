import './index.css'

import NxtSlidesContext from '../../context/NxtSlidesContext'

const SlideListItem = props => {
  const {slideDetails, serialNumber} = props
  const {heading, description} = slideDetails

  return (
    <NxtSlidesContext.Consumer>
      {value => {
        const {changeActiveTab, activeIndex} = value
        const isActive = activeIndex === serialNumber - 1
        const activeSlide = isActive ? 'active-slide' : ''

        const onClickSlideTabItem = () => {
          changeActiveTab(serialNumber - 1)
        }
        return (
          <li
            className={`slide-list-item ${activeSlide}`}
            onClick={onClickSlideTabItem}
            testid={`slideTab${serialNumber}`}
          >
            <p className="slide-number">{serialNumber}</p>
            <div className="slide-tab">
              <h1 className="tab-heading">{heading}</h1>
              <p className="tab-description"> {description}</p>
            </div>
          </li>
        )
      }}
    </NxtSlidesContext.Consumer>
  )
}

export default SlideListItem
