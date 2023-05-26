import React from "react"
import User from "./User"

class Users extends React.Component {


	render() {
		if(this.props.users.length > 0)
			return (<div>
				{this.props.users.map((el)=> (
					// из переданного из App списка(this.props.users) с помощью map 
					<User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} user={el}/>//user={el} - в компонент User передаем текущего пользователя с которым в данный момент работаем, и также передаем из родительского(props) класса App свойство onDelete
				))}
			</div>)
		else 
			return (<div className="user">
				<h3>Пользователей нет</h3>
			</div>)
	}

}

export default Users