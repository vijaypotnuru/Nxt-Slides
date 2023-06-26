import React from 'react'

const NxtSlidesContext = React.createContext({
  initialList: [],
  activeIndex: 0,
  changeActiveTab: () => {},
  addNewItem: () => {},
  changeHeading: () => {},
  changeDescription: () => {},
})

export default NxtSlidesContext
