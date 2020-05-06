package com.bit.web.record;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public interface RecordDao {

	List<Record> selectAll();

}
