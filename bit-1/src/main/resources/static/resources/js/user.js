"use strict"
var user = user || {} // or name space("user")에 json을 담으면 json(객체) //Member m
						// = null;
user = (() => {
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다.` //field
	let admin_vue, user_vue
	
	let init = () => { // 이름이 없으면 공간을 차지하지 않는다 anonymous 함수
		admin_vue = `/resources/vue/admin_vue.js`
		user_vue = `/resources/vue/user_vue.js`
		
		onCreate()
	}
	let onCreate = () => { //
		
		$.when(
				$.getScript(user_vue),
				//$.getScript(admin_vue)	
				
			).done(()=>{
				setContentView()
									
			$('#join_button')
		.css('cursor','pointer')
		.click( e =>{
			e.preventDefault()
			$('#content').empty()
			$('#content').html(userVue.signup())
			$(`<input type="button"/>`)
			.attr({value:'가 입'})
			.css({width : '50%'})
			.appendTo('#button_box')
			.click(e=>{
				e.preventDefault()
						alert('가입 버튼 클릭')
					})
			$(`<input type="button"/>`) 
			.attr({value:'취 소'})
			.css({width :'50%'})
			.appendTo('#button_box')
			.click(e=>{
				e.preventDefault()
						alert('취소 버튼 클릭')
			})
					
			})

		$('#login_button')
		.css('cursor','pointer')
		.click( e =>{
			e.preventDefault()
			$('#content').empty()
			$('#content').html(userVue.signin())
			
			$(`<input type="button">`)
			.attr({value:"로그인"})
			.appendTo('#login_box')
			.click(e=>{
				e.preventDefault()
			$.ajax({
				url : '',
				type : 'post',
				data : JSON.stringify({
				userid : $('#userid').val(),
				password : $('#password').val()}),
				dataType : 'json',
				contentType : 'application/json',
					
				success: d => {
						location.href = ""
				},
				error : (r, x, err) => {
						alert(r.status)
				}
		})
				
	})
			$(`<input type="button">`)
			.attr({value:"취 소"})
			.appendTo('#login_box')
			.click(e=>{
				e.preventDefault()
			})
			
						
			})
				
		}).fail(()=>{
				alert(WHEN_ERROR)
		})
		
		$.when(
			$.getScript(admin_vue)	
			
		).done(()=>{
								
		$('#register_button')
		.css('cursor','pointer')
		.click( e =>{
			e.preventDefault()
			$('#content').empty()
			$('#content').html(adminVue.join())
			$(`<input type="button"/>`)
			.attr({value:'등 록'})
			.css({width : '50%'})
			.appendTo('#button_box')
			.click(e=>{
				e.preventDefault()
						alert('등록 버튼 클릭')
					})
			$(`<input type="button"/>`) //<input id="button_box" type="button" value="취 소" style="width: 50%/>
			.attr({value:'취 소'})
			.css({width :'50%'})
			.appendTo('#button_box')
			.click(e=>{
				e.preventDefault()
						alert('취소 버튼 클릭')
			})
					
			})

		$('#acess_button')
		.css('cursor','pointer')
		.click( e =>{
			e.preventDefault()
			$('#content').empty()
			$('#content').html(adminVue.login())
			location.href = "/admin"
			$(`<input type="button">`)
			.attr({value:"로그인"})
			.appendTo('#login_box')
			.click(e=>{
				e.preventDefault()
			$.ajax({
				url : '/admin/login',
				type : 'post',
				data : JSON.stringify({
				userid : $('#userid').val(),
				password : $('#password').val()}),
				dataType : 'json',
				contentType : 'application/json',
					
				success: d => {
						location.href = "/admin"
				},
				error : (r, x, err) => {
						alert(r.status)
				}
		})
				
	})
			$(`<input type="button">`)
			.attr({value:"취 소"})
			.appendTo('#login_box')
			.click(e=>{
				e.preventDefault()
			})
			
						
			})
	}).fail(()=>{
			alert(WHEN_ERROR)
	})

		
		}
	let setContentView = () => { // 그림을 그리는 기능, 화면처리
		alert("3")
	}
	return {init}
	
})()