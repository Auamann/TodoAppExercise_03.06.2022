package com.example.demo.Task;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Task {

    private String id = UUID.randomUUID().toString();
    private String task;
    private String description;
    private String status;


}