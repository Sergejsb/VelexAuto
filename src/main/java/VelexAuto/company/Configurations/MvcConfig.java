package VelexAuto.company.Configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@Configuration
@EnableWebMvc
public class MvcConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {

        registry.addViewController("/").setViewName("index");
        registry.addViewController("/about").setViewName("index");
        registry.addViewController("/job").setViewName("index");
        registry.addViewController("/contacts").setViewName("index");
        registry.addViewController("/login").setViewName("index");
        registry.addViewController("/employees").setViewName("index");
        registry.addViewController("/employees/add").setViewName("index");
        registry.addViewController("/employees/edit/:id").setViewName("index");
    }
}

