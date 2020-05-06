"use strict"

var record = record || {}

record = (() => {
	
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다.`
	let record_vue
	
	let init = () => {
		record_vue = `/resources/vue/record_vue.js`
		
		onCreate()
	}
	let onCreate = () => {
		
		$.When(
				$.getScript(record_vue)
				
		).done(() => {
			setContentView()
			
			$.getJSON('/records', d =>{
				
			})
			
			
			
		}).fail(() => {})
		
	}
	let setContentView = () => {
		
	}
	
	return {init}
	
})()