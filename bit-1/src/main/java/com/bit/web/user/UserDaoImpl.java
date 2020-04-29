package com.bit.web.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDaoImpl implements UserDao {
	@Autowired UserDao userDao;

	@Override
	public void insert(User user) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<User> selectAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User selectOne(String userid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(User user) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleto(User user) {
		// TODO Auto-generated method stub
		
	}
	
	

}
