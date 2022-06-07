package com.example.demo.KanbanController;

import com.example.demo.Task.Task;
import com.example.demo.TaskService.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class KanbanController {

    private final TaskService taskService;

    @PostMapping("/kanban")
    void addTask(@RequestBody Task task){
        taskService.addTask(task);
    }

    @GetMapping("/kanban")
    List<Task> getTask(){
        return taskService.getTasks();
    }

    @PutMapping("/kanban/next")
    Task promoteTask(@RequestBody Task task){
       return taskService.promoteTask(task);

    }

}


