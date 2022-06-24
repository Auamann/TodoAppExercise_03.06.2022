package com.example.demo.Task;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "tasks")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Task {

    @Id
    private String id;
    private String task;
    private String description;
    private String status;

    public Task(String task, String description, String status) {
        this.task = task;
        this.description = description;
        this.status = status;
    }
}