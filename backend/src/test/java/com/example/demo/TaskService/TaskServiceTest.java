package com.example.demo.TaskService;

import com.example.demo.Task.Task;
import com.example.demo.TaskRepo.RepoInterface;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Optional;


class TaskServiceTest {

    @Test
    void shouldAddOneTask() {
        Task testTask = new Task("task", "description", "status");

        RepoInterface mockRepoInterface = Mockito.mock(RepoInterface.class);

        TaskService testService = new TaskService(mockRepoInterface);
        testService.addTask(testTask);
        Mockito.verify(mockRepoInterface).save(testTask);

    }

    @Test
    void shouldGetTask() {
        Task testTask = new Task("task", "description", "status");

        RepoInterface mockRepoInterface = Mockito.mock(RepoInterface.class);
        Mockito.when(mockRepoInterface.findById("1")).thenReturn(Optional.of(testTask));

        TaskService testService = new TaskService(mockRepoInterface);
        Task actual = testService.getTask("1");
        Assertions.assertThat(actual).isEqualTo(testTask);

    }
}