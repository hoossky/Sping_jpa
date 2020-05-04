"use strict"
var admin = admin || {} //IIFE 방식
admin = (() => {                         //( ()=>{} )(  )

	let init = () => {
		onCreate()
	}
	let onCreate = () => { // 기능
		setContentView()
		
		$.getJSON('/users', d => {
			$('#total_count').text('총 회원수 : '+ d.length)
				$.each(d, (i,j) => {
					$(`<tr>
            			<td>
            			<span>${i+1}</span>
            			</td>
            			<td>
            			<span>${j.userid}</span>
            			</td>
            			<td>
            			<span id = "user_`+(i+1)+`"></span>
            			</td>
            			<td>
            			<span>${j.ssn}</span>
            			</td>
            			<td>
            			<span>${j.email}</span>
            			</td>
            			<td>
            			<span>${j.phoneNumber}</span>	
            			</td>
            			<td>
            			<span>${j.registerDate}</span>
            			</td>
            		</tr>`).appendTo('#userData')
            		$(`<a>${j.name}</a>`)
            		.css({cursor: 'pointer', color: 'blue'})
            		.appendTo("#user_"+(i+1))
            		.click( e => {
            			e.preventDefault()
            			alert(`${j.userid}`)
            		})
				           		
			}) //each
		}) //getJSON
		
		$.getJSON('/admins', d=> {
			$.each(d, (i,j) => {
				$(`<tr>
        			<td>
        			<span>${i+1}</span>
        			</td>
        			<td>
        			<span>${j.userid}</span>
        			</td>
        			<td>
        			<span id = "user_`+(i+1)+`"></span>
        			</td>
        			<td>
        			<span>${j.ssn}</span>
        			</td>
        			<td>
        			<span>${j.email}</span>
        			</td>
        			<td>
        			<span>${j.phoneNumber}</span>	
        			</td>
        			<td>
        			<span>${j.registerDate}</span>
        			</td>
        		</tr>`).appendTo('#userData')
        		$(`<a>${j.name}</a>`)
            		.css({cursor: 'pointer', color: 'blue'})
            		.appendTo("#user_"+(i+1))
            		.click( e => {
            			e.preventDefault()
            			alert(`${j.userid}`)
            		})
		})
		
	} // onCreate
	let setContentView = () => {   //속성
		$('#userData tr').first().css({'background-color':'yellow'}) //<a href='#'>(j.name)</a>
		
	}
	return {init} // {init : init, onCreate, setContentView} //init: 생략 가능, 2개 이상 오픈 가능
				  // {init : () => {}, onCreate : () => {}, setContentView : () => {} }
	// 클로저 방식 //스크립트만으로 보안 가능 // 
	
})()


