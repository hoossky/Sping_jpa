package com.bit.web.record;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

public class RecordServiceImpl implements RecordService{
	@Autowired RecordDao recordDao;

	@Override
	public List<Record> findAll() {
		return recordDao.selectAll();
	}

}
