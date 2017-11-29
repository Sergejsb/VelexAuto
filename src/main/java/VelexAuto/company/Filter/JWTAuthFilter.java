//package VelexAuto.company.Filter;
//
//import VelexAuto.company.Service.TokenAuthService;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.web.filter.GenericFilterBean;
//import org.springframework.security.core.Authentication;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.http.HttpServletRequest;
//import java.io.IOException;
//
//
//public class JWTAuthFilter extends GenericFilterBean {
//
//    @Override
//    public void doFilter(ServletRequest request,
//                         ServletResponse response,
//                         FilterChain filterChain)
//            throws IOException, ServletException {
//        Authentication authentication = TokenAuthService
//                .getAuthentication((HttpServletRequest) request);
//
//        SecurityContextHolder.getContext()
//                .setAuthentication(authentication);
//        filterChain.doFilter(request, response);
//    }
//}
