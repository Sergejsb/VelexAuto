//package VelexAuto.company.Configurations;
//
//import VelexAuto.company.Filter.JWTAuthFilter;
//import VelexAuto.company.Filter.JWTLoginFilter;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.Arrays;
//
//
//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.cors().and().csrf().disable().authorizeRequests()
//                .antMatchers("/", "/about", "/job", "/contacts", "/login").permitAll()
//                .anyRequest().authenticated()
//                .and()
//                .formLogin().loginPage("/login").permitAll()
//                .and()
//
//                .addFilterBefore(new JWTLoginFilter("/auth", authenticationManager()),
//                        UsernamePasswordAuthenticationFilter.class)
//
//                .addFilterBefore(new JWTAuthFilter(),
//                        UsernamePasswordAuthenticationFilter.class);
//    }
//
////    @Bean
////    CorsConfigurationSource corsConfigurationSource() {
////        CorsConfiguration configuration = new CorsConfiguration();
////        configuration.setAllowedOrigins(Arrays.asList("/**"));
////        configuration.setAllowedHeaders(Arrays.asList("Content-Type, application/json"));
////        configuration.setAllowedMethods(Arrays.asList("GET","POST", "DELETE", "PUT", "PATCH", "HEAD", "OPTIONS"));
////        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
////        source.registerCorsConfiguration("/**", configuration);
////        return source;
////    }
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//
//        auth.inMemoryAuthentication()
//                .withUser("admin")
//                .password("password")
//                .roles("ADMIN");
//    }
//}