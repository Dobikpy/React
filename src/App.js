import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"

class App extends React.Component {
	constructor(props) {  //конструктор класса App
		super(props)  //конструктор родительского класса(React.Component) и переданные ему свойства(props)
		this.state = {  //state - это состояния, которые динамически меняют значения на веб.странице
				users: [
		{
			id: 1,
			firstname: 'Bob',
			lastname: 'Marley',     //здесь элементы в виде объекта, свойства которых записаны по умолчанию
//и будут динимически изменяться
			bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			age: 40,
			isHappy: true
		},
		{id: 2,
			firstname: 'John',
			lastname: 'Doe',
			bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			age: 22,
			isHappy: false
		}
	]
		}

		this.editUser = this.editUser.bind(this)  //создается новая функция с тем же телом,
		//но в контексте применения со state (эта привязка для собственных методов, а для встроенных(render) не нужна)
		this.addUser = this.addUser.bind(this)
		this.deleteUser = this.deleteUser.bind(this)
	}
	
	render() {
		return (<div>
			<Header title="Список пользователей"/>
			<main>							
				<Users users={this.state.users} onEdit={this.editUser} 
				//{this.state.users} - это список с пользователями, который передаём из App в компонент Users
				// Также в Users передаем свойство onDelete с функцией deleteUser в качестве значения
				onDelete={this.deleteUser}/> 
			</main>
			<aside>
				<AddUser onAdd={this.addUser}/>  
			</aside>
		</div>)
	}
	deleteUser(id) {
		this.setState({  //setState - метод изменения состояния объекта(ключ(users): и функционал)
		//функционал - для списка users устанавливаем новое состояние
		// через filter (в новый список добавляем пользователей, у 
		//которых id не равно переданному в deleteUser )
			users: this.state.users.filter((el) => el.id !== id)
		})
	}

	editUser(user) {
		let allUsers = this.state.users//выводим в переменную весь список пользователей
		allUsers[user.id - 1] = user//и полученного из AddUser пользователя вставляем по
		//индексу[user.id - 1] - вместо редактируемого

		this.setState({users: []}, () => {//users: [] - очищаем весь список(меняем состояние)
			this.setState({users: [...allUsers]})//и после в колбэке записываем в состояние весь
			//список который сохранен в allUsers
		} )
	}

	addUser(user) {
		const id = this.state.users.length + 1
		this.setState({users: [...this.state.users, {id, ...user}]})
	}//обращаемся к списку users: , открываем массив и обращаемся ко всему списку[...this.state.users, {id, ...user}] и добавляем в него новый текущий объект, в котором id и все те данные, которые передаються в качестве параметра. То есть меняем список(state)
}

export default App