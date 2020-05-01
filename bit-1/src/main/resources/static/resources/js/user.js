"use strict"
var user = user || {} // or name space("user")에 json을 담으면 json(객체) //Member m = null;
user = (() => {
	let init = () => { // 이름이 없으면 공간을 차지하지 않는다 annonymous 함수
		onCreate()
	}
	let onCreate = () => { //
		setContentView()
		
		$('#join_button')
		.css('cursor', 'pointer')
		.click( e => {
			e.preventDefault()
			location.href = "user/signup.html" 
		})

		$('#login_button')
		.css('cursor', 'pointer')
		.click( e => {
			e.preventDefault()
			location.href = "user/signin.html"
		})

		$('#register_button')
		.css('cursor','pointer')
		.click( e =>{
			e.preventDefault()
			location.href = "admin" 
		})

		$('#acess_button')
		.css('cursor','pointer')
		.click( e =>{
			e.preventDefault()
			location.href = "admin/access.html"
		})
		}
	let setContentView = () => { // 그림을 그리는 기능, 화면처리
		alert("3")
	}
	return {init}
	
})()