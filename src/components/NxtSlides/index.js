import './index.css'

import NxtSlidesContext from '../../context/NxtSlidesContext'

import SlideListItem from '../SlideListItem'
import Slide from '../Slide'

const NxtSlides = () => (
  <NxtSlidesContext.Consumer>
    {value => {
      const {initialList} = value
      return (
        <div className="slides-container">
          <ol className="slides-list-container">
            {initialList.map((eachSlide, index) => (
              <SlideListItem
                key={eachSlide.id}
                slideDetails={eachSlide}
                serialNumber={index + 1}
              />
            ))}
          </ol>
          <Slide />
        </div>
      )
    }}
  </NxtSlidesContext.Consumer>
)

export default NxtSlides
