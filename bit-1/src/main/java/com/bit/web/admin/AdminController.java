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
@RequestMapping("/admin")
public class AdminController {
	@Autowired AdminService adminService; // new 역할
	
	@PostMapping("/join")
	public Messenger add(@RequestBody Admin admin) {
		int current = adminService.count();
		adminService.add(admin);
		return(adminService.count() == (current + 1))? Messenger.SUCCESS : Messenger.FAIL;
	}
	@PostMapping("/login")
	public Messenger login(@RequestBody Admin admin) {
		return (adminService.login(admin))? Messenger.SUCCESS : Messenger.FAIL;
	}
	@GetMapping("/list")
	public Admin[] list(@RequestBody Admin admin) {
		Admin[] returnList = new Admin[5];
		return returnList;
	}
	@GetMapping("/count")
	public int count(@RequestBody Admin admin) {
		int returnCount = 0;
		return returnCount;
	}
	@GetMapping("/detail")
	public Admin detail(@RequestBody Admin admin) {
		Admin returnDetail = new Admin();
		return returnDetail;
	}
	@PutMapping("/update")
	public Admin update(@RequestBody Admin admin) {
		Admin returnUpdate = new Admin();
		return returnUpdate;
	}
	@DeleteMapping("/delete")
	public Admin delete(@RequestBody Admin admin) {
		Admin returnDelete = new Admin();
		return returnDelete;
	}
}