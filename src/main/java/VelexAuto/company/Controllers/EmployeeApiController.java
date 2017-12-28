package VelexAuto.company.Controllers;

import VelexAuto.company.Service.EmployeeService;
import VelexAuto.company.domain.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class EmployeeApiController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employees/")
    public ResponseEntity<List<Employee>> listAllEmployees() {
        List<Employee> employees = (List<Employee>) employeeService.findAllEmployees();
        if (employees.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<?> getUser(@PathVariable("id") long id) {
        Employee employee = employeeService.findById(id);
        if (employee == null) {
            return new ResponseEntity<>("Employee with id " + id + " not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping("/employees/")
    public ResponseEntity<?> createEmployee(@RequestBody Employee employee) {
        employeeService.saveEmployee(employee);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/employees/{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable("id") long id, @RequestBody Employee employee) {

        Employee currentEmployee = employeeService.findById(id);

        currentEmployee.setName(employee.getName());
        currentEmployee.setSurname(employee.getSurname());
        currentEmployee.setAge(employee.getAge());
        currentEmployee.setSalary(employee.getSalary());

        employeeService.updateEmployee(currentEmployee);
        return new ResponseEntity<>(currentEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") long id) {
        Employee employee = employeeService.findById(id);

        employeeService.deleteEmployeeById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}