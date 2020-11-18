package com.GenCompBackend.security.oauth2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.InMemoryTokenStore;

@Profile("oauth-security")
@Configuration
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private AppUserDetailsService appUserDetailsService;
	
	@Override
	public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
		clients.inMemory()
				.withClient("angular")
				.secret("$2a$10$gZTRi.JTp0QU8aVmNO4asezuvH5UbofjLljg1XY.Rqi2Uru1epjbW")
				.scopes("read","write")
				.authorizedGrantTypes("password", "refresh_token")
				.accessTokenValiditySeconds(1800)
				.refreshTokenValiditySeconds(3600 * 24)
			.and()
				.withClient("android")
				.secret("$2a$10$RDIhnBGqg2jYCd29VR0Y0eav6ZQPFXG4inVaM6g9u7HalCAiFJK16")
				.scopes("read")
				.authorizedGrantTypes("password")
				.accessTokenValiditySeconds(1800);
		
	}
	
	@Override
	public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
		endpoints
		.tokenStore(tokenStore())
		.userDetailsService(appUserDetailsService)
		.reuseRefreshTokens(false)
		.authenticationManager(authenticationManager);
		
		
	}

	private TokenStore tokenStore() {
		// TODO Auto-generated method stub
		return new InMemoryTokenStore();
	}

}
