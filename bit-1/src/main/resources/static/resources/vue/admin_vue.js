"use strict"

var adminVue  =  {
			join : () => { //매핑구조 :
				return `<table id="home" style=margin : 0 auto;>
				
				<tr>
						<td colspan="3" style = "width: 700px" ><h2>관리자 등록</h2></td>
				</tr>
				<tr>
						<td rowspan="4" style="width: 360px; height: 360px"><img src="https://pbs.twimg.com/profile_images/549171896013438979/rqtU6Cvn_400x400.png" style="width: 360px; height: 360px"></td>
						<td style="width: 100px;">이름</td>
						<td style="width: 250px;"><input id= name type = text/></td>
				</tr>
				<tr>
		
						<td>직급</td>
						<td><input id= position type = text/></td>
				</tr>
				<tr>
						<td>이메일</td>
						<td><input id= email type = text/></td>
				</tr>
				<tr>
						<td>전화 번호</td>
						<td><input id= phoneNumber type = text/></td>
				</tr>
				<tr>
						<td id="button_box" colspan = "3">
						</td>
				</tr>
			
				</table>
				`
			},
			login : () => {
				return `<article>
						<form id ="login_box" margin : 0 auto;>
						<label>ID </label> <br>
						<input id="userid" type="text"> <br>
						<label>PASSWORD</label><br>
						<input id="password" type="text"><br><br>
						</form>
						</article>`
			}
			
} //인스턴스로 바로 넣으면 OOP, 함수형? //리턴 생략 (함수는 무조건 리턴이 있어야한다)
	