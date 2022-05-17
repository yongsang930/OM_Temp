package com.openmate.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.openmate.sample.service.SampleService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class SampleController {
	
	@Autowired
	private SampleService sampleService;
	
	/** 
	 * html 컨포넌트 호출
	 */		
	@RequestMapping({"/", "/main"})
    public String main() {
		return "main";
	}
	
	@RequestMapping("/test")
	public String test() {
		return "test";
	}
	
	@RequestMapping("/chart")
	public String chart() {
		return "chart";
	}
	
	@RequestMapping("/ol")
	public String ol() {
		return "openLayers";
	}
	
}