package com.bit.web.record;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/records")
public class RecordController {
	@Autowired RecordService recordService;
	
	@GetMapping("")
	public List<Record> list(){
		return recordService.findAll();
		
	}

}
