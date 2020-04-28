package com.bit.web.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit.web.util.Messenger;

@RestController
@RequestMapping("/member")
public class AdminController {
	@Autowired AdminService memberService; // new 역할
	
	@PostMapping("/join")
	public Messenger add(@RequestBody Admin member) {
		int current = memberService.count();
		memberService.add(member);
		System.out.println(member);
		System.out.println(current);
		return(memberService.count() == (current + 1))? Messenger.SUCCESS : Messenger.FAIL;
	}
	@PostMapping("/login")
	public Messenger login(@RequestBody Admin member) {
		System.out.println(member);
		return (memberService.login(member))? Messenger.SUCCESS : Messenger.FAIL;
	}
	@GetMapping("/list")
	public Admin[] list(@RequestBody Admin member) {
		Admin[] returnList = new Admin[5];
		return returnList;
	}
	@GetMapping("/count")
	public int count(@RequestBody Admin member) {
		int returnCount = 0;
		return returnCount;
	}
	@GetMapping("/detail")
	public Admin detail(@RequestBody Admin member) {
		Admin returnDetail = new Admin();
		return returnDetail;
	}
	@PutMapping("/update")
	public Admin update(@RequestBody Admin member) {
		Admin returnUpdate = new Admin();
		return returnUpdate;
	}
	@DeleteMapping("/delete")
	public Admin delete(@RequestBody Admin member) {
		Admin returnDelete = new Admin();
		return returnDelete;
	}
}