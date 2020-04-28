package com.bit.web.admin;

import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService{
	private Admin[] admins;
	private int count;
	
	public AdminServiceImpl() {
		admins = new Admin[5];
		count = 0;
	}

	@Override
	public void add(Admin admin) {
		admins[count] = admin;
		count++;
	}

	@Override
	public Admin[] list(Admin admin) {
		return admins;
	}

	@Override
	public Admin detail(String userid) {
		Admin returnUserid = null;
		for(int i=0; i<count; i++) {
			if(userid.equals(admins[i].getUserid())) {
				returnUserid = admins[i];
			}
		}
		return returnUserid;
	}

	@Override
	public int count() {
		return count;
	}

	@Override
	public void update(Admin admin) {
		for(int i=0; i<count; i++) {
			if(admin.getUserid().equals(admins[i].getUserid())) {
				admins[i].setPassword(admin.getPassword());
				break;
			}
		}
	}

	@Override
	public void delete(Admin admin) {
		for(int i=0; i<count; i++) {
			if(admin.getUserid().equals(admins[i].getUserid())
					&&
					admin.getPassword().equals(admins[i].getPassword())) {
				admins[i] = admins[count-1];
				admins[count-1]=null;
				count--;
			}
		}
	}

	@Override
	public boolean login(Admin admin) {
		boolean ok = false;
		for(int i=0; i<count; i++) {
			if(admin.getUserid().equals(admins[i].getUserid())
					&&
					admin.getPassword().equals(admins[i].getPassword())) {

				ok = true;
				break;
			}
		}
		return ok;
	}
	
}
