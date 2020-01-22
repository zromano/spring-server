package com.romano.resumeserver;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

@Controller
public class HelloWorldController {

    @GetMapping("/helloWorld")
    public @ResponseBody String helloWorld() {
        return new Date().toString();
    }
}
