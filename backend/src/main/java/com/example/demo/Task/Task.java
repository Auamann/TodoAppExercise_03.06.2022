package com.example.demo.Task;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.UUID;

@Document (collection = "tasks")
@Data
@AllArgsConstructor
public class Task {

    private final String id = UUID.randomUUID().toString();
    private String task;
    private String description;
    private String status;


}