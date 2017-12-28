//package VelexAuto.company;
//
//import VelexAuto.company.Repository.EmployeeRepository;
//import VelexAuto.company.domain.Employee;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//@Component
//public class DatabaseLoader implements CommandLineRunner {
//
//    private final EmployeeRepository repository;
//
//    @Autowired
//    public DatabaseLoader(EmployeeRepository repository) {
//
//        this.repository = repository;
//    }
//
//    @Override
//    public void run(String... strings) throws Exception {
//        this.repository.save(new Employee("Aleksandr", "Usyk", 30, 500));
//        this.repository.save(new Employee("Conor", "McGregor", 29, 300000));
//        this.repository.save(new Employee("Floyd", "Mayweather", 40, 1000000000));
//        this.repository.save(new Employee("Vasyl", "Lomachenko", 29, 2000000));
//    }
//}
