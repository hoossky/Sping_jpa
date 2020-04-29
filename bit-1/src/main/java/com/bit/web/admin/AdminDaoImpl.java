package com.bit.web.admin;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.bit.web.util.Data;
import com.bit.web.util.Messenger;

@Repository
public class AdminDaoImpl implements AdminDao
{

	@Override
	public void insert(Admin admin) {
		System.out.println("3번 : "+admin);
		try {
			BufferedWriter writer = new BufferedWriter(
									new FileWriter(
									new File(Data.ADMIN_PATH.toString() + Data.LIST + Data.CSV), true));
			writer.write(admin.toString());
			writer.newLine(); // 줄바꿈
			writer.flush();
			System.out.println("4번 : "+admin);
		}catch(Exception e) {
			System.out.println(Messenger.FILE_INSERT_ERROR);
		}
		
	}

	@Override
	public List<Admin> selectAll() {
		List<Admin> list = null;
		try {
			
		}catch(Exception e){
			
		}
		
		return list;
	}

	@Override
	public Admin selectOne(String employNumber) {
		Admin admin = null;
		try {
			
		}catch(Exception e){
			
		}

		return null;
	}

	@Override
	public void update(Admin admin) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Admin admin) {
		// TODO Auto-generated method stub
		
	}

}
