package egovframework.com.cmm;

import java.io.IOException;
import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.spring.UIView;
import com.cleopatra.ui.PageGenerator;

@Controller
public class CleopatraUIController {
	public CleopatraUIController() {
	}

	@PostConstruct
	private void initPageGenerator() {
		PageGenerator instance = PageGenerator.getInstance();
		instance.setURLSuffix(".clx");
	}

	@RequestMapping("/app/inc/index.clx")
	public View index(HttpServletRequest request, HttpServletResponse response) throws IOException {
		System.out.println("test");
		return new UIView();
	}
	
	@RequestMapping("/app/inc/mypage/login.clx")
	public View index2(HttpServletRequest request, HttpServletResponse response) throws IOException {
		System.out.println("login");
		return new UIView("/app/inc/mypage/login.clx");
	}
	
	
}