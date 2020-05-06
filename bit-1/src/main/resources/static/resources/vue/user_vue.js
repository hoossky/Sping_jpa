"use strict"

var userVue  =  {
			signup : () => {
				return `<table id="home" style=margin : 0 auto;>
				
				<tr>
						<td colspan="3" style = "width: 700px" ><h2>사용자 등록</h2></td>
				</tr>
				<tr>
						<td rowspan="5" style="width: 360px; height: 360px"><img src="https://pbs.twimg.com/profile_images/549171896013438979/rqtU6Cvn_400x400.png" style="width: 360px; height: 360px"></td>
						<td style="width: 100px;">이름</td>
						<td style="width: 250px;"><input id= name type = text/></td>
				</tr>
				<tr>
				
						<td>ID</td>
						<td><input id= userid type = text/></td>
				</tr>
				<tr>
						<td>PW</td>
						<td><input id= password type = text/></td>
				</tr>
				<tr>
						<td>주소</td>
						<td><input id= address type = text/></td>
				</tr>
				<tr>
						<td>주민등록번호</td>
						<td><input id= ssn type = text/></td>
				</tr>
				<tr>
						<td id="button_box" colspan = "3">
						</td>
				</tr>
			
				</table>
				`
			},
			signin : () => {
				return `<article>
				<form id ="login_box" margin : 0 auto;>
				<label>ID </label> <br>
				<input id="userid_ins" type="text"> <br>
				<label>PASSWORD</label><br>
				<input id="password_ins" type="text"><br><br>
				</form>
				</article>`
				
			
			},
			detail : () => {
				return `<div id="content_container">
					<table>
						<tr>
							<td id="title" colspan="3">사용자 정보</td>
						</tr>
						<tr>
							<td id="profile_pic" rowspan="7">
								<svg id="profile_pic_default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" />
									<path d="M0 0h24v24H0z" fill="none" />
								</svg>
							</td>
							<td class="userlabel">아이디</td>
							<td class="input">
								<p id="userId"></p>
							</td>
						</tr>
						<tr>
							<td class="userlabel">이름</td>
							<td class="input">
								<p id="userName"></p>
							</td>
						</tr>
						<tr>
							<td class="userlabel">주민번호</td>
							<td class="input">
								<p id="userSSN"></p>
							</td>
						</tr>
						<tr>
							<td class="userlabel">주소</td>
							<td class="input">
								<p id="userAddr"></p>
							</td>
						</tr>
						<tr>
							<td class="userlabel">이메일</td>
							<td class="input">
								<p id="userEmail"></p>
							</td>
						</tr>
						<tr>
							<td class="userlabel">전화번호</td>
							<td class="input">
								<p id="userPhoneNumber"></p>
							</td>
						</tr>
						<tr>
							<td class="userlabel">가입일</td>
							<td class="input">
								<p id="registerDate"></p>
							</td>
						</tr>
					</table>
				</div>`
			},
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
							<p id="userLostid"></p>
						</td>
					</tr>
					<tr>
						<td class="userlabel">습득물 품명</td>
						<td class="input">
							<p id="userItem"></p>
						</td>
					</tr>
					<tr>
						<td class="userlabel">습득물 일자</td>
						<td class="input">
							<p id="userDate"></p>
						</td>
					</tr>
					<tr>
						<td class="userlabel">습득물 분류</td>
						<td class="input">
							<p id="userKind"></p>
						</td>
					</tr>
					<tr>
						<td class="userlabel">습득 위치</td>
						<td class="input">
							<p id="userLocation"></p>
						</td>
					</tr>
					
				</table>
			</div>`
				},
				
				adminList : () => {
					
					return `<div id="content_container">
					<table id="userData">
                        <tr>
            			<td>
                                <a id="number">No.</a>
                            </td>
                            <td>
                                <a id="employNumber">사번</a>
                            </td>
                             <td>
                                <a id="name">이름</a>
                            </td>
                           <td>
                                <a id="position">직급</a>
                            </td>
                            <td>
                                <a id="email">이메일</a>
                            </td>
                            <td>
                                <a id="phoneNumber">전화번호</a>
                            </td>
                            <td>
                                <a id="registerDate">등록일자</a>
                            </td>
            		</tr>
            		
            	</table>
				</div>`
					},
					
					adminDetail : () => {
						return `<div id="content_container">
							<table>
								<tr>
									<td id="title" colspan="3">관리자 정보</td>
								</tr>
								<tr>
									<td id="profile_pic" rowspan="7">
										<svg id="profile_pic_default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" />
											<path d="M0 0h24v24H0z" fill="none" />
										</svg>
									</td>
									<td class="userlabel">사번</td>
									<td class="input">
										<p id="employNumber"></p>
									</td>
								</tr>
								<tr>
									<td class="userlabel">이름</td>
									<td class="input">
										<p id="adminName"></p>
									</td>
								</tr>
								<tr>
									<td class="userlabel">직급</td>
									<td class="input">
										<p id="adminPosition"></p>
									</td>
								</tr>
								<tr>
									<td class="userlabel">이메일</td>
									<td class="input">
										<p id="adminEmail"></p>
									</td>
								</tr>
								<tr>
									<td class="userlabel">전화번호</td>
									<td class="input">
										<p id="adminPhoneNumber"></p>
									</td>
								</tr>
								<tr>
									<td class="userlabel">가입일</td>
									<td class="input">
										<p id="registerDate"></p>
									</td>
								</tr>
							</table>
						</div>`
					},
				
			
} 
	