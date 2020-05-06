"use strict"

var lostVue  =  {
		
		list : () => {
		
		return `<div id="content_container">
		<table>
			<tr>
				<td id="title" colspan="3">습득물 정보</td>
			</tr>
			<tr>
				<td id="lost_pic" rowspan="5">
					<img src="https://mtc.ntnu.edu.tw/upload_files/student/lost-icon01.png">
				</td>
				<td class="userlabel">분실물 아이디</td>
				<td class="input">
					<p id="lostId"></p>
				</td>
			</tr>
			<tr>
				<td class="userlabel">습득물 품명</td>
				<td class="input">
					<p id="item"></p>
				</td>
			</tr>
			<tr>
				<td class="userlabel">습득물 일자</td>
				<td class="input">
					<p id="date"></p>
				</td>
			</tr>
			<tr>
				<td class="userlabel">습득물 분류</td>
				<td class="input">
					<p id="kind"></p>
				</td>
			</tr>
			<tr>
				<td class="userlabel">습득 위치</td>
				<td class="input">
					<p id="location"></p>
				</td>
			</tr>
			
		</table>
	</div>`
		}
			
			
}
	