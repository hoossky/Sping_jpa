package com.bit.web.record;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class Record {
	
	private String name, age, gender, address;

}
