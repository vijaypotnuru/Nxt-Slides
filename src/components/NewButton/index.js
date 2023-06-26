import {v4 as uuidv4} from 'uuid'

import NxtSlidesContext from '../../context/NxtSlidesContext'

import './index.css'

const NewButton = () => (
  <NxtSlidesContext.Consumer>
    {value => {
      const {addNewItem, activeIndex, changeActiveTab} = value

      const onClickAddButton = () => {
        const newSlide = {
          id: uuidv4(),
          heading: 'Heading',
          description: 'Description',
        }
        addNewItem(newSlide)
        changeActiveTab(activeIndex + 1)
      }

      const onDoubleClickBtn = () => {
        console.log('DoubleClicked')
      }

      return (
        <button
          className="new-button"
          type="button"
          onClick={onClickAddButton}
          onDoubleClick={onDoubleClickBtn}
        >
          <img
            className="plus-icon"
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
          />
          New
        </button>
      )
    }}
  </NxtSlidesContext.Consumer>
)

export default NewButton
