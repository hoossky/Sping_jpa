"use strict"
var admin = admin || {} // IIFE 방식 (내부는 es6)
admin = (() => {                         // ( ()=>{} )( )
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다.`
	let user_vue //파일명
	
	let init = () => {
		user_vue = `/resources/vue/user_vue.js`
		onCreate()
	}
	
	let onCreate = () => { // 기능
		
		$.when(
				$.getScript(user_vue)
				
		).done(()=>{
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
	            									//비동기, 자바를 다녀오려면 시간이 오래걸림
	            			$('#userData').empty() // 오버로딩 방지
	            			$(userVue.detail()) // userVue 변수명
	            			.appendTo('#userData')
	            			
	            			$.getJSON(`/users/${j.userid}`, d =>{		//동기, 그림을 먼저 그려놓고 자바를 다녀옴
	            				$('#userId').text(d.userid)
	            				$('#userName').text(d.name)
	            				$('#userSSN').text(d.ssn)
	            				$('#userAddr').text(d.address)
	            				$('#userEmail').text(d.email)
	            				$('#userPhoneNumber').text(d.phoneNumber)
	            				$('#registerDate').text(d.registerDate)
	            				
	            			}) //getJSON
	            			
	            			
	            		}) // 이름 클릭
				}) // each
			}) // getJSON
			
			$('#user_list')
			.click( e => {
				e.preventDefault()
				alert('사용자 목록')
				$('#userData').empty()
				$('#userData').html(`<table id="userData">
                        <tr>
							<td>
                            	<a>No.</a>
                            </td>
                            <td>
                                <a>아이디</a>
                            </td>
                             <td>
                                <a>이름</a>
                            </td>
                           <td>
                                <a>주민번호	</a>
                            </td>
                            <td>
                                <a>이메일</a>
                            </td>
                            <td>
                                <a>전화번호</a>
                            </td>
							<td>
								<a>등록일자</a>
							</td>
            		</tr>
            		
            	</table>`)
            	$('#userData tr').first().css({'background-color':'yellow'})
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
	            									//비동기, 자바를 다녀오려면 시간이 오래걸림
	            			$('#userData').empty() // 오버로딩 방지
	            			$(userVue.detail()) // userVue 변수명
	            			.appendTo('#userData')
	            			
	            			$.getJSON(`/users/${j.userid}`, d =>{		//동기, 그림을 먼저 그려놓고 자바를 다녀옴
	            				$('#userId').text(d.userid)
	            				$('#userName').text(d.name)
	            				$('#userSSN').text(d.ssn)
	            				$('#userAddr').text(d.address)
	            				$('#userEmail').text(d.email)
	            				$('#userPhoneNumber').text(d.phoneNumber)
	            				$('#registerDate').text(d.registerDate)
	            				
	            			}) //getJSON
	            			
	            			
	            		}) // 이름 클릭
				}) // each
			}) //사용자 목록 getJSON
				
			}) //사용자 목록 클릭
			
			
			$('#admin_list')
			.click( e => {
				e.preventDefault()
				alert('관리자 목록')
				$('#userData').empty()
				$('#userData').html(`<table id="adminData">
                        <tr>
							<td>
                            	<a>No.</a>
                            </td>
                            <td>
                                <a>사 번</a>
                            </td>
                             <td>
                                <a>이 름</a>
                            </td>
                           <td>
                                <a>직 급</a>
                            </td>
                            <td>
                                <a>이메일</a>
                            </td>
                            <td>
                                <a>전화 번호</a>
                            </td>
							<td>
								<a>등록일</a>
							</td>
            		</tr>
            		
            	</table>`)
            	$('#userData tr').first().css({'background-color':'yellow'})
				$.getJSON('/admins', d => {
					
					$('#total_count').text('총 관리자 수 : '+ d.length)
						$.each(d, (i,j) => {
							$(`<tr>
		            			<td>
		            			<span>${i+1}</span>
		            			</td>
		            			<td>
		            			<span>${j.employNumber}</span>
		            			</td>
		            			<td>
		            			<span id = "user_`+(i+1)+`"></span>
		            			</td>
		            			<td>
		            			<span>${j.position}</span>
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
					alert('관리자')
					$('#userData').empty()
					$(userVue.adminDetail()) // 
		           	.appendTo('#userData')
		           	$.getJSON(`/admins/${j.employNumber}`, d =>{		
		           		$('#employNumber').text(d.employNumber)
		           		$('#adminName').text(d.name)
		           		$('#adminPosition').text(d.position)
		           		$('#adminEmail').text(d.email)
		           		$('#adminPhoneNumber').text(d.phoneNumber)
		           		$('#registerDate').text(d.registerDate)
		           
		           	})
					
					
				})
						}) // each
				}) // admin getJSON
				
			})// 관리자 클릭
			
			$('#lost_list')
			.click( e => {
				e.preventDefault()
				alert('분실물 목록')
			$('#userData').empty()
			$('#userData').html(`<table id="lostData">
                        <tr>
							<th>
                            	<a>No.</a>
                            </th>
                            <th>
                                <a>분실물 ID</a>
                            </th>
                             <th>
                                <a>습득물 품명</a>
                            </th>
                           <th>
                                <a>습득 일자</a>
                            </th>
                            <th>
                                <a>습득물 분류</a>
                            </th>
                            <th>
                                <a>습득 위치</a>
                            </th>
            		</tr>
            		
            	</table>`)
			$.getJSON('/losts', d => {
				$('#total_count').text('총 분실물 수 : '+ d.length)
					$.each(d, (i,j) => {
						$(`<tr>
	            			<td>
	            			<span>${i+1}</span>
	            			</td>
	            			<td>
	            			<span>${j.lostid}</span>
	            			</td>
	            			<td>
	            			<span id = "user_`+(i+1)+`"></span>
	            			</td>
	            			<td>
	            			<span>${j.date}</span>
	            			</td>
	            			<td>
	            			<span>${j.kind}</span>
	            			</td>
	            			<td>
	            			<span>${j.location}</span>	
	            			</td>
	            		</tr>`).appendTo('#userData')
	            		
			
			$(`<a>${j.item}</a>`)
       		.css({cursor: 'pointer', color: 'blue'})
	   		.appendTo("#user_"+(i+1))
			.click( e => {
				e.preventDefault()
				alert('분실물')
				$('#userData').empty()
				$(userVue.list()) // 
	           	.appendTo('#userData')
	            			
	           	$.getJSON(`/losts/${j.lostid}`, d =>{		
	           		$('#userLostid').text(d.lostid)
	           		$('#userItem').text(d.item)
	           		$('#userDate').text(d.date)
	           		$('#userKind').text(d.kind)
	           		$('#userLocation').text(d.location)
	           	})
				
				
			})
					}) // each
			}) // list getJSON
			}) // lost 클릭
			
				}).fail(()=>{
					alert(WHEN_ERROR)
				})
		
	}// onCreate
	let setContentView = () => {   // 속성
		$('#userData tr').first().css({'background-color':'yellow'}) // <a href='#'>(j.name)</a>
		
		
	}
	
	return {init} // {init : init, onCreate, setContentView} //init: 생략 가능, 2개
					// 이상 오픈 가능
				  // {init : () => {}, onCreate : () => {}, setContentView :
					// () => {} }
	// 클로저 방식 //스크립트만으로 보안 가능 //
	
})()