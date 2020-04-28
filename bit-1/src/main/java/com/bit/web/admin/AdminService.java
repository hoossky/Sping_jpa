package com.bit.web.admin;

public interface AdminService {
	
	public void add(Admin admin);
	public Admin[] list(Admin admin);
	public Admin detail(String userid);
	public int count();
	public boolean login(Admin admin);
	public void update(Admin admin);
	public void delete(Admin admin);

}