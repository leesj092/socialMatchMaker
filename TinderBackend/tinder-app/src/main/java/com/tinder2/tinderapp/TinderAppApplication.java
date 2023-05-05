package com.tinder2.tinderapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories("com")
@ComponentScan(basePackages = { "com" })
@EntityScan("com")
@SpringBootApplication
public class TinderAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TinderAppApplication.class, args);
	}

}
