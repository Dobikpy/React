import React from "react"

class AddUser extends React.Component {
	userAdd = {}
	constructor(props) {
		super(props)
		this.state = {
			firstname: "",
			lastname: "",
			bio: "",
			age: 1,
			isHappy: false
		}
	}
	render() {
		return (
			//ref - это ссылка на тег, el - form, this - текущий класс
			//.myForm - ссылка на form как свойство класса
			<form ref={(el) => this.myForm = el}>
				<input placeholder="Имя" onChange={(e) => this.setState({ 
				//onChange - обработчик события, срабатывает когда пользователь вводит данные в поле
				//здесь после события(e) срабатывает колбэк setState с логикой - событие(firsrname): значение события из поля ввода(e.target.value)
					firstname: e.target.value })} /> 
				<input placeholder="Фамилия" onChange={(e) => 
					this.setState({ lastname: e.target.value })}/>
				<textarea placeholder="Биография" onChange={(e) => 
					this.setState({ bio: e.target.value })}></textarea>
				<input placeholder="Возраст" onChange={(e) => 
					this.setState({ age: e.target.value })} />
				<label htmlFor="isHappy">Счастлив?</label>
				<input type="checkbox" id="isHappy" onChange={(e) => 
				this.
				//сдесь обращаемся к свойству checked(есть галочка или нет)
				setState({ isHappy: e.target.checked })}/> 
				<button type="button" onClick={() => {//type="button" - чтобы страница не перезагружалась(по умолчанию - submit)
				this.myForm.reset()//метод удаления содержимого form
				this.userAdd = {
					firstname: this.state.firstname,
					lastname: this.state.lastname,
					bio: this.state.bio,
					age: this.state.age,
					isHappy: this.state.isHappy
				}
				if (this.props.user)//если мы работаем с переданным user(редактируем)
					this.userAdd.id = this.props.user.id//то в объект userAdd передаем id текущего user
				this.props.onAdd(this.userAdd)//в метод onAdd передаем объект userAdd
			}
			}>Добавить</button>
			</form>
		)
	}
}

export default AddUser
		