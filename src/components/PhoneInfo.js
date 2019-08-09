import React, {Component} from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info:{
            name : "이름",
            phone : "010-0000-0000",
            id : 0
        }
    }
    state = {
        editing : false,
        name:'',
        phone:''
    }
    handleRemove = () => {
        const {info, onRemove} = this.props
        onRemove(info.id)
    }
    handleUpdate = () => {

    }

    render() {
        const style = {
            border : '1px solid black',
            paddig : '8px',
            margin : '8px'
        }
        const {editing} = this.state

        if(editing){
            return(
                <div style = {style}>
                    <div>
                        <input
                            value={this.state.name}
                            name='name'
                            placeholder='이름'
                            onChange={this.handleChange}
                        />
                        </div>
                        <div>
                            <button onClick={this.handleRemove}>삭제</button>
                            <button onClick={this.handleToggleEdit}>적용</button>
                    </div>
                </div>
            )
        }
        const {
            name, phone, id 
        } = this.props.info
        
        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>수정</button>
            </div>
        )
    }
}

export default PhoneInfo