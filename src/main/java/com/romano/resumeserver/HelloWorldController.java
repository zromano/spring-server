package com.romano.resumeserver;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloWorldController {

    @GetMapping("/")
    public String index() {
        return "forward:/index.html";
    }

    @ResponseBody
    @GetMapping("/helloWorld")
    public String helloWorld() {
        return "hello";
    }
}
