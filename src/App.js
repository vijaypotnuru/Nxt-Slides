import {Component} from 'react'

import NxtSlidesContext from './context/NxtSlidesContext'

import Header from './components/Header'
import NewButton from './components/NewButton'
import NxtSlides from './components/NxtSlides'

import './App.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
]

class App extends Component {
  state = {
    initialList: initialSlidesList,
    activeIndex: 0,
  }

  onChangeHeading = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = initialList.map((eachItem, index) => {
        if (activeIndex === index) {
          return {...eachItem, heading: value}
        }
        return eachItem
      })
      return {initialList: newList}
    })
  }

  onChangeDescription = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = initialList.map((eachItem, index) => {
        if (activeIndex === index) {
          return {...eachItem, description: value}
        }
        return eachItem
      })
      return {initialList: newList}
    })
  }

  onChangeActiveTab = index => {
    this.setState({activeIndex: index})
  }

  onAddNewItem = item => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = insert(initialList, activeIndex + 1, item)
      return {initialList: [...newList]}
    })
  }

  render() {
    const {initialList, activeIndex} = this.state

    return (
      <NxtSlidesContext.Provider
        value={{
          initialList,
          activeIndex,
          changeActiveTab: this.onChangeActiveTab,
          addNewItem: this.onAddNewItem,
          changeHeading: this.onChangeHeading,
          changeDescription: this.onChangeDescription,
        }}
      >
        <>
          <Header />
          <NewButton />
          <NxtSlides />
        </>
      </NxtSlidesContext.Provider>
    )
  }
}

export default App
