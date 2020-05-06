package com.bit.web.record;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public interface RecordService {

	public List<Record> findAll();

}
