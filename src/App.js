import React, {Component} from 'react'
import PhoneForm from './components/phoneForm'
import PhoneInfoList from './components/PhoneInfoList'

class App extends Component {
  id = 2
  state ={
    information: [
      {
        id : 0,
        name : '이민기',
        phone : '000-0000-0000',
      },
      {
        id : 1,
        name : '이민기2',
        phone : '111-0000-0000',
      }
    ]
  }
  handleCreate = (data) => {
    const {information} = this.state
    this.setState({
      information: information.concat({id:this.id++, ...data})
    })
  }
  handleRemove = (id) => {
    const {information} = this.state
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id,data) => {
    const {information} = this.state
    this.setState({
      information: information.map(
        info => id === info.id
          ?{...info, ...data}
          :info
      )
    })
  }
  render(){
    return(
      <div>
        <PhoneForm 
          onCreate={this.handleCreate}
        />
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
